const food = require("../models/food");

exports.getDataBase = async (ctx) => {
  try {
    ctx.status = 200;
    ctx.body = await food.find();
  } catch (e) {
    ctx.status = 500;
    console.log("Internal Server Error", e);
  }
};
