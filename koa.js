const Koa = require('koa');
const app = new Koa();
const path = require('path');
const fs = require('fs');

const serve = require('koa-static');
app.use(serve(path.join(__dirname, 'dev')));

app.use(async (ctx, next) => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./dev/index.html');
});

app.listen(3000);
