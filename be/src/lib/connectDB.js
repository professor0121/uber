import mongoose from 'mongoose'
import { dbEnv } from '../config/env.js'

export const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(dbEnv.url)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}