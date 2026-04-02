import { Router } from "express";
import userRouter from "./user.routes.js"
import captainRouter from './captain.routes.js'
import systemRouter from './system.routes.js'
const router=Router();

//user routes
router.use("/user",userRouter)
//captain routes
router.use("/captain",userRouter)
//system routes
router.use("/system",systemRouter)

export default router