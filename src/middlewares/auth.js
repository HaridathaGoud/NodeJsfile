function authenticate(req,res,next){
    const API_KEY = "hari_12";
    if(req.headers.authorization===API_KEY){
        next();
    }else{
    
        res.status(500).send("Unauthorized")
    }
    
    }
    
    module.exports = authenticate