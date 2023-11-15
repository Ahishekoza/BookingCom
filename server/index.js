import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import hotelRoutes from './routes/hotelRoute.js'
import authRoutes from './routes/authRoute.js'
import userRoutes from './routes/userRoute.js'
import roomRoutes from "./routes/roomRoutes.js";
const app = express();
dotenv.config()
await mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("mongodb connected Successfully")
}).catch((error)=>{
    console.log("mongodb error: " + error)
})

app.use(cors())
app.use(express.json());

app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.use('/api/hotels',hotelRoutes)
app.use('/api/room',roomRoutes)




app.listen(8800,()=>{
    console.log('Successfully started application')
})