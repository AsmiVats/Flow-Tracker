type Phase = {
  name: string;
  startDate: string;
  endDate: string;
  daysUntil: number;
};
// function to calculate every upcoming phase dates 
// export function calculatePhases(lastPeriodStart: Date): Phase[] {
//   const MS_PER_DAY = 1000 * 60 * 60 * 24;

//   const addDays = (date: Date, days: number) => {
//     const newDate = new Date(date);
//     newDate.setDate(newDate.getDate() + days);
//     return newDate;
//   };


//   const format = (date: Date) => date.toISOString().split("T")[0];

//   const today = new Date();

//   const lastStart = new Date(lastPeriodStart);
//   const cycleLength = 28;
//   const nextStart = addDays(lastStart, cycleLength); // Next cycle

//   // Phases based on common assumptions
//   const menstrualStart = nextStart;
//   const menstrualEnd = addDays(menstrualStart, 5);

//   const follicularStart = addDays(menstrualEnd, 1);
//   const follicularEnd = addDays(follicularStart, 7);

//   const ovulationStart = addDays(follicularEnd, 1);
//   const ovulationEnd = addDays(ovulationStart, 2);

//   const lutealStart = addDays(ovulationEnd, 1);
//   const lutealEnd = addDays(lutealStart, 12); // Ends at next cycle start

//   const phases: Phase[] = [
//     { name: "Menstrual", startDate: format(menstrualStart), endDate: format(menstrualEnd), daysUntil: Math.round((menstrualStart.getTime() - today.getTime()) / MS_PER_DAY) },
//     { name: "Follicular", startDate: format(follicularStart), endDate: format(follicularEnd), daysUntil: Math.round((follicularStart.getTime() - today.getTime()) / MS_PER_DAY) },
//     { name: "Ovulation", startDate: format(ovulationStart), endDate: format(ovulationEnd), daysUntil: Math.round((ovulationStart.getTime() - today.getTime()) / MS_PER_DAY) },
//     { name: "Luteal", startDate: format(lutealStart), endDate: format(lutealEnd), daysUntil: Math.round((lutealStart.getTime() - today.getTime()) / MS_PER_DAY) },
//   ];

//   return phases;
// }

export function getNextExpectedPeriod(lastPeriodStart: Date, cycleLength = 28): string {
  const today = new Date();
  let nextStart = new Date(lastPeriodStart);

  while (nextStart <= today) {
    nextStart.setDate(nextStart.getDate() + cycleLength);
  }

  return nextStart.toISOString().split("T")[0];
}


export function calculatePhases(lastPeriodStart: Date): Phase[] {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const cycleLength = 28;

  const addDays = (date: Date, days: number) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  };

  const format = (date: Date) => date.toISOString().split("T")[0];
  const today = new Date();

  // Adjust lastPeriodStart to latest cycle start
  let lastStart = new Date(lastPeriodStart);
  while (lastStart.getTime() + cycleLength * MS_PER_DAY < today.getTime()) {
    lastStart.setDate(lastStart.getDate() + cycleLength);
  }

  const menstrualStart = new Date(lastStart);
  const menstrualEnd = addDays(menstrualStart, 5);

  const follicularStart = addDays(menstrualEnd, 1);
  const follicularEnd = addDays(follicularStart, 7);

  const ovulationStart = addDays(follicularEnd, 1);
  const ovulationEnd = addDays(ovulationStart, 2);

  const lutealStart = addDays(ovulationEnd, 1);
  const lutealEnd = addDays(lutealStart, 12);

  const phases: Phase[] = [
    { name: "Menstrual", startDate: format(menstrualStart), endDate: format(menstrualEnd), daysUntil: Math.round((menstrualStart.getTime() - today.getTime()) / MS_PER_DAY) },
    { name: "Follicular", startDate: format(follicularStart), endDate: format(follicularEnd), daysUntil: Math.round((follicularStart.getTime() - today.getTime()) / MS_PER_DAY) },
    { name: "Ovulation", startDate: format(ovulationStart), endDate: format(ovulationEnd), daysUntil: Math.round((ovulationStart.getTime() - today.getTime()) / MS_PER_DAY) },
    { name: "Luteal", startDate: format(lutealStart), endDate: format(lutealEnd), daysUntil: Math.round((lutealStart.getTime() - today.getTime()) / MS_PER_DAY) },
  ];

  return phases;
}


type Result = {
  currentCycleDay: number;
  currentPhase: "menstrual" | "follicular" | "ovulation" | "luteal";
  nextPeriod: string;
};

// export function getCycleInfo(startDate: Date): Result {
//   const today = new Date();
//   const start = new Date(startDate);

//   const MS_PER_DAY = 1000 * 60 * 60 * 24;
//   const daysPassed = Math.floor((today.getTime() - start.getTime()) / MS_PER_DAY) + 1;

//   const currentCycleDay = daysPassed > 28 ? (daysPassed % 28 || 28) : daysPassed;

//   let currentPhase: Result["currentPhase"] = "luteal";
//   if (currentCycleDay >= 1 && currentCycleDay <= 5) currentPhase = "menstrual";
//   else if (currentCycleDay >= 6 && currentCycleDay <= 13) currentPhase = "follicular";
//   else if (currentCycleDay >= 14 && currentCycleDay <= 16) currentPhase = "ovulation";
//   else currentPhase = "luteal";

//   const nextPeriodDate = new Date(start);
//   nextPeriodDate.setDate(start.getDate() + 28);
//   const nextPeriod = nextPeriodDate.toISOString().split("T")[0];

//   return {
//     currentCycleDay,
//     currentPhase,
//     nextPeriod,
//   };
// }

export function getCycleInfo(startDate: Date): Result {
  const today = new Date();
  let cycleStart = new Date(startDate);
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const cycleLength = 28;

  while (cycleStart.getTime() + cycleLength * MS_PER_DAY < today.getTime()) {
    cycleStart.setDate(cycleStart.getDate() + cycleLength);
  }

  const daysPassed = Math.floor((today.getTime() - cycleStart.getTime()) / MS_PER_DAY) + 1;
  const currentCycleDay = daysPassed > 28 ? (daysPassed % 28 || 28) : daysPassed;

  let currentPhase: Result["currentPhase"] = "luteal";
  if (currentCycleDay >= 1 && currentCycleDay <= 5) currentPhase = "menstrual";
  else if (currentCycleDay >= 6 && currentCycleDay <= 13) currentPhase = "follicular";
  else if (currentCycleDay >= 14 && currentCycleDay <= 16) currentPhase = "ovulation";

  const nextPeriodDate = new Date(cycleStart);
  nextPeriodDate.setDate(cycleStart.getDate() + cycleLength);
  const nextPeriod = nextPeriodDate.toISOString().split("T")[0];

  return {
    currentCycleDay,
    currentPhase,
    nextPeriod,
  };
}
