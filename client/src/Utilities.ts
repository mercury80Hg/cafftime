import { Logs, Log } from './Types';
import { DateTime } from 'luxon';

/* Helper functions to draw pie chart and line graph*/

export function calculateRemaining(
  logs: Logs,
  selectedTime: DateTime = DateTime.now()
): number {
  const halfLife = 5;
  console.log('logs', logs);
  const remainingCaffeine = logs.reduce((acc: number, item: Log) => {
    // what is being calculatedhere
    const timePassed =
      selectedTime.diff(DateTime.fromISO(item.timestamp!)).milliseconds /
      (60 * 60 * 1000);
    const halfLivesPassed = timePassed / halfLife;
    const caffeineHalfLife =
      Number(item.caffeine) * Math.pow(0.5, halfLivesPassed);
    return acc + caffeineHalfLife;
  }, 0);
  return remainingCaffeine;
}

export function setGraphTime(hour: number) {
  return new Date().setHours(hour, 0, 0, 0);
}

export function setGraphTimeforTomorrow(hour: number) {
  const now = new Date();
  return new Date(now.setDate(now.getDate() + 1)).setHours(hour, 0, 0, 0);
}
