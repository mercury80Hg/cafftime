const mongoose = require('mongoose');
const dbName = 'cafftime';

mongoose
  .connect(`mongodb://127.0.0.1:27017/${dbName}`)
  .then(() => console.log(`DB Connected to : ${dbName}`))
  .catch((e) => console.log("connection failed", e));

module.exports = mongoose;