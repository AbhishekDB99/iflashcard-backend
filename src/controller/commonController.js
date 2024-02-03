const getHealthStatus = async(req,res) =>{
    try{
        res.status(200).send({message:"OK",status:200})
    }catch(error){
        res.status(400).send({message:"error",status:400})
    }
}

module.exports ={
    getHealthStatus
}