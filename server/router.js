const Router = require('koa-router');
const router = new Router();
const logs = require('./controllers/logs');

router.get('/log', logs.getLogs);
router.post('/add', logs.postLog);

module.exports = router;