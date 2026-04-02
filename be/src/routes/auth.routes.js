import Router from "express"
import { authConroller } from "../controllers/auth.controller.js";
const router=Router();

router.post('/register',authConroller.regiser);

export default router;  