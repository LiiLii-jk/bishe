const express =require('express');
const app = express();
const cors = require('cors');

//跨域
app.use(cors());
//解析表单数据
app.use(express.urlencoded({extended:false}));

//导入用户路由模块
const get = require('./src/router/get');
app.use('/api',get);

app.listen(3270,()=>{
  console.log('api serve running at http://localhost:8080');
})
