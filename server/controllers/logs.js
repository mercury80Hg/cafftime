const logs = require('../models/logs');

exports.getLogs = async ctx => {
  try {
    ctx.status = 200;
    ctx.body = await logs.find();
  } catch(e) {
    ctx.status = 500;
    console.log('Internal Server Error', e);
  }
}

exports.postLog = async ctx => {
  try {
    ctx.status = 201;
    ctx.body = await logs.create(ctx.request.body);
  } catch (e) {
    ctx.status = 500;
    console.log("Internal Server Error", e);
  }
}