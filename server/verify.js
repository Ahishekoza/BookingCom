import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

export const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const verify = jsonwebtoken.verify(token, process.env.SECRET_KEY);
        req.user = verify
        next()
    } catch (error) {
        res.status(401).json({
            message:'Unautorized token'
        })
    }
}

export const verifyisAdmin = (req, res,next) =>{
    if(req.user.isAdmin){
        next()
    }
    else{
        res.status(403).json({
            message : 'You do not have permission to perform this action '
        })
    }
}