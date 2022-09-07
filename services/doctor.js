const connect =require('../shared/db');
const doctor =require('../models/doctor');



const getAllDoctors=()=>{
  return doctor.findAll();
}
const createDoctor = (doc)=>{
   
    return doctor.create(doc);
}
getDoctorById=(id)=>{
    return doctor.findById(id)
}



module.exports={getAllDoctors,createDoctor,getDoctorById}