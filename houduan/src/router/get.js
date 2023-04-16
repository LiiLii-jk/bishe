const e = require('express');
const express =require('express');
const boke = require('../router/mysql.js')
// const boke = require('mysql')


const router = express.Router();

//获取文章
router.get('/getEssay',(req,res)=>{
  // res.send('ok');
  let sql = 'select * from essay';
  const row= boke.query(sql,(err,result)=>{
    if (err) {
      res.send({
        status: 1,
        message: 'fail',
      });
    } else {
      res.send({
        status: 0,
        message: 'ok',
        data:[result]
      });
    }
  });
})

router.get('/addEssay',(req,res)=>{
  let sqlStr = `insert into essay (message,joindate) values (?,?)`;
  // const testEssay = { message:'111', joindate:'2022-9-14'};
  boke.query(sqlStr,[req.query.message,req.query.joindate],(err,result)=>{
    if(err){
      console.log(err.message);
      return
    }
    res.send({
      status:200,
      message:'添加成功'
    })
  })
})

router.get('/deleteEssay',(req,res)=>{
  let sqlStr = `delete from essay where id=?`;
  boke.query(sqlStr,[req.query.id],(err,result)=>{
    if(err){
      console.log(err.message);
      return
    }
    res.send({
      status:200,
      message:'删除成功'
    })
  })
})

router.get('/updateEssay',(req,res)=>{
  let sql = `update essay set message = ? where id = ?`;
  boke.query(sql,[req.query.message,req.query.id],(err,result)=>{
    console.log(req.query.message);
    if(err){
      console.log(err.message);
      return
    }
    res.send({
      status:200,
      message:'修改成功'
    })
  })
})

router.get('/test',(req,res)=>{
  res.send('ok');
})

//获取评论
router.get('/getComments',(req,res)=>{
  // res.send('ok');
  let sql = 'select * from comments';
  const row= boke.query(sql,(err,result)=>{
    if (err) {
      res.send({
        status: 1,
        message: 'fail',
      });
    } else {
      res.send({
        status: 0,
        message: 'ok',
        data:[result]
      });
    }
  });
})

router.get('/addComments',(req,res)=>{
  let sqlStr = `insert into comments (comment) values (?)`;
  boke.query(sqlStr,[req.query.comment],(err,result)=>{
    if(err){
      console.log(err.message);
      return
    }
    res.send({
      status:200,
      message:'添加成功'
    })
  })
})


module.exports = router;