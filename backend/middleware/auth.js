import jwt from "jsonwebtoken";

const auth = (req,res,next) =>{
    const token = req.headers.authorization;
    const response = jwt.verify(token,process.env.JWT_SECRET)

    if (!response){
        return res.status(403).json({
            message: "Invalid Authorization"
        })
    }
    req.userId = response.id;
    next();
}

export {auth};