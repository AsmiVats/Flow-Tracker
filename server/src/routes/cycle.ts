import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from 'hono/jwt'


export const cycleRoute = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables:{
        userId:any;
    }
}>();

cycleRoute.use('/*', async (c, next) => {
    const jwt = c.req.header('Authorization');
    if (!jwt) {
        c.status(401);
        return c.json({ error: "unauthorized" });
    }
    const token = jwt;
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload) {
        c.status(401);
        return c.json({ error: "unauthorized" });
    }
    c.set('userId', payload.id);
    await next()
});

cycleRoute.post('/',async(c)=>{
    const userId = c.get('userId');

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

    console.log(c.get('userId'));
    const body = await c.req.json();
    console.log(body);

//     const convertToDate = (dateString: string) => {
//   const [day, month, year] = dateString.split('-');
//   return new Date(`${year}-${month}-${day}`);
// };


    try{
        const cycle = await prisma.cycle.create({
            data:{
                startDate: new Date(body.startDate),
                endDate: new Date(body.endDate),
                userId : userId
            }
        });

        return c.json({
		id: cycle.id
	    });
    }catch(e){
        c.status(411);
        return c.json({message:"error while adding cycle data.",error:e})
    }
});
cycleRoute.get('/recent', async (c) => {
    const userId = c.get('userId');

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        // Find the most recent cycle for this user
        const recentCycle = await prisma.cycle.findFirst({
            where: {
                userId: userId
            },
            select:{
                id:true,
                userId:true,
                startDate:true,
                endDate:true,
                user:{
                    select:{
                        name:true
                    }
                }
            },
            orderBy: {
                startDate: 'desc' // Orders by startDate in descending order (newest first)
            }
        });

        if (!recentCycle) {
            return c.json({ message: "No cycles found for this user" }, 404);
        }

        return c.json(recentCycle);
    } catch (e) {
        c.status(500);
        return c.json({ 
            message: "Error while fetching recent cycle",
            error: e instanceof Error ? e.message : "Unknown error" 
        });
    }
});
cycleRoute.put('/',async(c)=>{
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    try{
        prisma.cycle.update({
            where:{
                id:body.id,
                user:userId
            },
            data:{
                startDate:body.startDate,
                endDate:body.endDate
            }
        });

        return c.json({message:"Update done successfully"});
    }catch(e){
        return c.json({message:"Error occurred while updating the cycle data",error:e});
    }
});

cycleRoute.get('/:id',async(c)=>{
  const id = c.req.param('id');

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

    try{
        const cycle = await prisma.cycle.findUnique({
            where:{
                id
            }
        })
        return c.json(cycle);
    }catch(e){
        c.json({message:"Error while fetching the cycle"});
    }
});