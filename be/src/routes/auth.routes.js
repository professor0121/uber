import Router from "express"
import { authController } from "../controllers/auth.controller.js";
const router=Router();

router.post('/register',authController.register);
router.post('/login',authController.login);

// // To do .....
// reffresh token 
// verify route
// forgate pass
// profile


export default router;  