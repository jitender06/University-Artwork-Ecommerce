import express from'express';
import {loginController, registerController, googleController} from '../Controllers/authController.js'

const router = express.Router();

router.post("/login", loginController)
router.post("/google", googleController)
router.post("/register", registerController)


export default router;