const {createDoctCont}=require('../controllers/doctor');
const docR=require('express').Router();
docR.route('/').post(createDoctCont);
// docR.route


module.exports=docR;