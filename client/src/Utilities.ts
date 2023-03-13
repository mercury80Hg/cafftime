/* Helper functions to draw pie chart and line graph*/

interface SchemaData {
  id?: String,
  name?: String,
  baseAmount?: Number,
  caffeine?: Number, 
  timestamp:Date,
}

export function calculateRemaining(logs: SchemaData[], selectedTime: number = Date.now()) {
  const halfLife = 5;
  const remainingCaffeine = logs.reduce((acc:number, item: any) => {
    const timePassed = Number(new Date(selectedTime)) - Number(new Date(item.timestamp)) / (60 * 60 * 1000);
    const halfLivesPassed = timePassed / halfLife;
    acc += item.caffeine * Math.pow(0.5, halfLivesPassed);
    return acc;
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
