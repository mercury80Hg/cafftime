import { Context } from "koa";

const logs = require('../models/logs');

exports.getLogs = async (ctx: Context) => {
  try {
    ctx.status = 200;
    ctx.body = await logs.find();
  } catch(e) {
    ctx.status = 500;
    console.log('Internal Server Error', e);
  }
}

exports.getLog = async (ctx: Context) => {
  try {
    const { id } = ctx.params
    ctx.status = 200;
    ctx.body = await logs.findById(id);
  } catch (e) {
    ctx.status = 500;
    console.log("Internal Server Error", e);
  }
};

exports.postLog = async (ctx: Context) => {
  try {
    ctx.status = 201;
    ctx.body = await logs.create(ctx.request.body);
  } catch (e) {
    ctx.status = 500;
    console.log("Internal Server Error", e);
  }
}

exports.deleteLog = async (ctx: Context) => {
  try {
    const { id } = ctx.params;
    ctx.status = 200;
    ctx.body = await logs.deleteOne({ _id: id });
  } catch (e) {
    ctx.status = 500;
    console.log("Internal Server Error", e);
  }
};


exports.editLog = async (ctx: Context) => {
  try {
    const { id } = ctx.params;
    ctx.status = 200;
    ctx.body = await logs.findByIdAndUpdate(id, ctx.request.body);
  } catch (e) {
    ctx.status = 500;
    console.log("Internal Server Error", e);
  }
};