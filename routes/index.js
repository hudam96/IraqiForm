var express = require('express');
var router = express.Router();
var mongoose = require('mongoose') ;
mongoose.connect("mongodb://huda:123@ds121289.mlab.com:21289/project").then(function(){
    console.log("Hi silly dataBase")});
    var Project = mongoose.model('Project' , {
      name1:String,
      name2:String,
      name3:String,
      name4:String,
      name5:String,
    })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/data', function(req, res, next) {
  res.render('data', { title: 'Express' });
});
router.post('/api/data', function(req ,res){
  var a = req.param('project') ;
  var  newProject = new Project(a);
  newProject.save().then(function(){
    res.json({
      isSuccess:true,
      message:"it is saved"
    })
  }).catch(function (error) {
    res.json({
      isSuccess:false,
      message:error.message
    })
  })
});
router.get('/api/data', function(req ,res){
    Project.find(function (error,project) {
        res.json(project)
    })
  })
module.exports = router;
