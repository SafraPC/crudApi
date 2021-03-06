const WorkWithUs = require("../../models/workWithUs");

const registerWorkWithUs = async(req,res)=>{
try{
     const file = req.file.filename
     const url = `http://localhost:8080/uploads/${file}`
     const workWith = await WorkWithUs.create({...req.body,cv:url});
     res.json(workWith);

}catch(error){
     res.json({error: error.message, message: "Registration Failed" });
}
};

const countWorksOportunities = async(req,res)=>{
     try {
          //Will return all data of this collection
          // const total = await WorkWithUs.find({}).lean(); 
          const total = await WorkWithUs.count();
          res.json({total : total});  
     } catch (error) {
          res.json({error:error.message, message:"Cannot get Workers Count"})
     }
}

module.exports = {registerWorkWithUs,countWorksOportunities};