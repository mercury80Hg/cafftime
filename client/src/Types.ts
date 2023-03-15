export type Logs = [{
  log: any |  {
    id?: string,
    name?:string,
    baseAmount?: number,
    caffeine?: number,
    imageUrl?:string,
    timestamp?: Date | number 
  }
}]
