import { Logs, Log } from './Types'

/* Helper functions to draw pie chart and line graph*/

export function calculateRemaining(logs: any, selectedTime: number) {
  const halfLife = 5;
  const remainingCaffeine = logs.reduce((acc:any, item:any) => {
    const timePassed =
      Number(selectedTime - Number(item.timestamp)) / (60 * 60 * 1000);
    const halfLivesPassed = timePassed / halfLife;
    acc += (item.caffeine) * Math.pow(0.5, halfLivesPassed);
    return acc;
  }, 0);
  return remainingCaffeine;
}

export function setGraphTime(hour:number) {
  return new Date().setHours(hour, 0, 0, 0);
}

export function setGraphTimeforTomorrow(hour:number) {
  const now = new Date();
  return new Date(now.setDate(now.getDate() + 1)).setHours(hour, 0, 0, 0);
}
