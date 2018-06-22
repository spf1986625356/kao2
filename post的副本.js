const Koa = require('koa');
const app = new Koa();
app.use(async ctx => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    //显示表单页面
    let html = `
            <h1>JSPang Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName" /><br/>
                <p>age</p>
                <input name="age" /><br/>
                <p>website</p>
                <input name="webSite" /><br/>
                <button type="submit">submit</button>
            </form>
        `;
    ctx.body = html;
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    let pastData = await parsePostData(ctx);
    ctx.body = pastData;
  } else {
    ctx.body = '<h1>404!</h1>';
  }
});
//我们先声明一个方法，然后用Promise对象进行解析。
//这里我们使用了ctx.req.on来接收事件。难点是我们这里用了ES6的Promise来处理。
function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    //测试模块
    try {
      let postdata = '';
      //数据不是一次就完事  而是一段一段的
      //每次接受到就添加到postdata中
      ctx.req.on('data', data => {
        postdata += data;
      });
      //数据接受完毕以后  做解析处理
      ctx.req.addListener('end', function() {
        let parseData = parseQueryStr(postdata);
        resolve(parseData);
      });
    } catch (error) {
      reject(error);
    }
  });
}
//POST字符串解析JSON对象
function parseQueryStr(queryStr) {
  let queryData = {};
  //截取&
  let queryStrList = queryStr.split('&');
  console.log(queryStrList);
  //截取=
  for (let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split('=');
    console.log(itemList);
    /**
     * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
     * 被编码的未编码版本的组件的一个统一资源标识符(URI)
     * @param encodedURIComponent A value representing an encoded URI component.
     * 一个值代表一个URI编码组件
     */
    //declare function decodeURIComponent(encodedURIComponent: string): string;
    //声明函数decodeURIComponent(encodedURIComponent:字符串):字符串;

    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  }
  return queryData;
}

app.listen(3000, () => {
  console.log('[demo] server is starting at port 3000');
});
