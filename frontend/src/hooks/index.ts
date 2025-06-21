import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useEffect, useState } from "react"

interface CycleType{
    id:string,
    user:{
        name:string
    },
    startDate:Date,
    endDate:Date,
}


export const useCycle = ({id}:{id:string})=>{
    const [loading,setloading] = useState(true);
    const [cycle,setcycle] = useState<CycleType>();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/cycle/${id}`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }).then(response=>{
            setcycle(response.data);
            setloading(false);
        })
    },[])

    return{
        loading,
        cycle
    }
};

export const userRecentCycle=()=>{
    const [loading,setloading] = useState(true);
    const [cycle,setcycle] = useState<CycleType>();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/cycle/recent`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }).then(response=>{
            setcycle(response.data);
            setloading(false);
        })
    },[])

    return{
        loading,
        cycle
    }
}