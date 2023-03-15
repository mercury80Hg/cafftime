export type Log = {
    id?: string,
    name?:string,
    baseAmount?: number,
    caffeine?: number,
    imageUrl?:string,
    timestamp?: number | Date
}

export type Logs = Log[]


// const data: Log = 
// {
//   "_id": "640f4ba2ae7e38fe8b1cbf9c",
//   "name": "Red Bull",
//   "baseAmount": 250,
//   "caffeine": 80,
//   "imageUrl": "https://www.caffeineinformer.com/wp-content/caffeine/red-bull.jpg"
// }