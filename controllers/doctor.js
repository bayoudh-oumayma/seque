const {getAllDoctors,createDoctor} = require("../services/doctor")


const createDoctCont =  (async (req,res)=>{

     
     res.status(201).send(await createDoctor({...req.body}))
})


module.exports={createDoctCont}