import { Logs, Log } from './Types'

/* Helper functions to draw pie chart and line graph*/

export function calculateRemaining(logs: Logs, selectedTime:number ) {
  const halfLife = 5;
  const remainingCaffeine = logs.reduce((acc:Log, item:Log) => {
    const timePassed =
      (selectedTime - Number(item.timestamp)) / (60 * 60 * 1000);
    const halfLivesPassed = timePassed / halfLife;
    const caffeineHalfLife = Number(item.caffeine) * Math.pow(0.5, halfLivesPassed)
    acc.caffeine = caffeineHalfLife;
    return acc;
  });
  return remainingCaffeine;
}

export function setGraphTime(hour:number) {
  return new Date().setHours(hour, 0, 0, 0);
}

export function setGraphTimeforTomorrow(hour:number) {
  const now = new Date();
  return new Date(now.setDate(now.getDate() + 1)).setHours(hour, 0, 0, 0);
}