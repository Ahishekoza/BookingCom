import userSchema from '../models/user.js'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const jwtToken =(id,isAdmin)=>{
    const payload={
        id:id,
        isAdmin:isAdmin
    }
    const options={
        expiresIn : '1h'
    }
    const secret_key = process.env.SECRET_KEY

    const token  = jsonwebtoken.sign(payload,secret_key,options)
    return token

}

export const register = async (req, res) => {

    // check if user is already registered
    try {
        const existingUser = await userSchema.findOne({ email: req.body.email })
        if (existingUser) {
            res.status(404).json({
                message: 'User already registered'
            })
        }

        const newUser = new userSchema(req.body)

        newUser.password = await bcrypt.hash(req.body.password,10)

        await newUser.save()

        res.status(201).json({
            message: 'User successfully registered',
            user: newUser
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}


export const login = async(req, res) => {
    console.log(req.body)
    await userSchema.findOne({email: req.body.email})
    .then((user)=>{

        const comparePassword =  bcrypt.compare(req.body.password,user.password)
        if(!comparePassword){
            res.status(404).json({
                message : 'Passwords do not match'
            })
        }

        const token = jwtToken(user._id,user.isAdmin)
        user = {...user._doc,password:'',isAdmin:'',token:token}

        res.status(200).json({
            user : user
        })

    })
    .catch((error)=>{
        res.status(404).json({
            message:`User not found ${error.message}`,
        })
    })
}

