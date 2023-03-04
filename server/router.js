const Router = require('koa-router');
const router = new Router();
const logs = require('./controllers/logs');

router.get('/log', logs.getLogs);
router.get("/log/edit/:id", logs.getLog);
router.delete("/log/edit/:id", logs.deleteLog);
// router.put("/log/edit/:id", logs.getLog);
router.post('/add', logs.postLog);

module.exports = router;