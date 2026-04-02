import { Router } from "express";
import userRouter from "./user.routes.js"
import captainRouter from './captain.routes.js'
import systemRouter from './system.routes.js'
import authRouter from './auth.routes.js'
const router=Router();

//user routes
router.use("/user",userRouter)
//captain routes
router.use("/captain",captainRouter)
//system routes
router.use("/system",systemRouter)

//auth routes
router.use("/auth",authRouter)

export default router