const mongoose = require('mongoose');
const dbName = 'cafftime';
 // when deploy, prepare .env file and set real DB_PORT and DB_NAME (e.g. const dbName = process.env.DB_NAME || 'cafftme')

mongoose
  .connect(`mongodb://127.0.0.1:27017/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB Connected to : ${dbName}`))
  .catch((e: string ) => console.log("connection failed", e));

  export {}
module.exports = mongoose;