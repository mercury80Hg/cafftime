export type Log = {
    id?: string,
    name?:string,
    baseAmount?: number,
    caffeine?: number,
    imageUrl?:string,
    timestamp?: number | Date
}

export type Logs = Log[]

export type AppProps = {
    remaining: number,
    remainingatBedtime: number,
    selectedItem: Log
}

