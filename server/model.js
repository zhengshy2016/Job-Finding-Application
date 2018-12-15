const mongoose=require('mongoose');
//链接mongo, 并使用imooc这个集合
const DB_URL='mongodb://zhengshuang:yzhsh2932962@ds249530.mlab.com:49530/imooc-react-chat';
mongoose.connect(DB_URL);
const models={
    user:{
        'user':{type:String, require:true},
        'pwd':{type:String, require:true},
        'type':{type:String,require:true},
        //头像
        'avatar':{type:String},
        'desc':{type:String},
        'title':{type:String},
        //如果你是boss 还有两个字段
        'company':{type:String},
        'money':{type:String}
    },
    chat:{
        'chatid':{'type':String,'require':true},
        'from':{'type':String, 'require':true},
        'to':{'type':String,'require':true},
        'read':{'type':Boolean,'default':false},
        'content':{'type':String,'require':true},
        'create_time':{'type':Number,'default':new Date().getTime()}

    }
}

for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}
module.exports={
    getModel:function(name){
        return mongoose.model(name)
    }
}










//mongoose.connection.on('connected',function(){
 //   console.log('mogo connect success');
//})
//新建数据collection，类似于mysql的表 mongo里有文档，字段的概念
//const User=mongoose.model('user',new mongoose.Schema({
//   user:{type:String, require:true},
//   age:{type:Number, require:true}
//}))
//新增数据
//User.create({
//  user:'imooc',
//  age:18
//},function(err,doc){
//    if(!err){
//       console.log(doc)
//    }else{
//        console.log(err)
//   }
//})