export type Log = {
  id: string;
  name: string;
  baseAmount: number;
  caffeine: number;
  imageUrl?: string;
  timestamp: string;
};

export type Logs = Log[];

export type CaffSimulatorProps = {
  remaining: number;
  remainingatBedtime: number;
};

export type AppProps = {
  remaining: number;
  remainingatBedtime: number;
  selectedItem: Log;
};
