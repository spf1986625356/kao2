////hello koa2
// const Koa = require('koa');
// const app = new Koa();
// //async是让方法变成异步，这个很好理解，关键是他的返回值是什么？我们得到后如何处理
// app.use(async ctx => {
//   ctx.body = 'hello koa2';
// });
// app.listen(3025);
// console.log('[ demo] start-quick is starting at port 3025');

// //获取get请求
// //在koa2中GET请求通过request接收，但是接受的方法有两种：query和querystring。
// //query：返回的是格式化好的参数对象。
// //querystring：返回的是请求字符串。
// //
const Koa = require('koa');
const app = new Koa();
app.use(async ctx => {
  let url = ctx.url;
  let request = ctx.request;
  let req_query = request.query;
  let req_querystring = request.querystring;
//打印反馈信息
  ctx.body = {
    url,
    req_query,
    req_querystring
  };
});

app.listen(3000, () => {
  console.log('[demo] server is starting at port 3000');
});

//直接从ctx中获取Get请求;
const Koa = require('koa');
const app = new Koa();
app.use(async ctx => {
  let url = ctx.url;

  //从request中获取GET请求
  let request = ctx.request;
  let req_query = request.query;
  let req_querystring = request.querystring;

  //从上下文中直接获取
  let ctx_query = ctx.query;
  let ctx_querystring = ctx.querystring;

  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  };
});

app.listen(3000, () => {
  console.log('[demo] server is starting at port 3000');
});

// // 获取Post请求的步骤：
// // 解析上下文ctx中的原生nodex.js对象req。
// // 将POST表单数据解析成query string-字符串.(例如:user=jspang&age=18)
// // 将字符串转换成JSON格式。
// const Koa = require('koa');
// const app = new Koa();
// app.use(async ctx => {
//   //当请求时GET请求时，显示表单让用户填写
//   if (ctx.url === '/' && ctx.method === 'GET') {
//     let html = `
//             <h1>Koa2 request post demo</h1>
//             <form method="POST"  action="/">
//                 <p>userName</p>
//                 <input name="userName" /> <br/>
//                 <p>age</p>
//                 <input name="age" /> <br/>
//                 <p>webSite</p>
//                 <input name='webSite' /><br/>
//                 <button type="submit">submit</button>
//             </form>
//         `;
//     ctx.body = html;
//     //当请求时POST请求时
//   } else if (ctx.url === '/' && ctx.method === 'POST') {
//     let url = ctx.url;
//     let span = "已收到 请稍后"
//     ctx.body = {
//       url,
//       span
//     };
//   } else {
//     //其它请求显示404页面
//     ctx.body = '<h1>404!</h1>';
//   }
// });

// app.listen(3000, () => {
//   console.log('[demo] server is starting at port 3000');
// });
