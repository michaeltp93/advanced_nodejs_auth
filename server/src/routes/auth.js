import { Router } from 'express';
import {
	login,
	register,
	forgotPassword,
	resetPassword,
} from '../controllers/auth';

const router = Router();

// Routes
router.post('/register', register);
router.post('/login', login);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resetToken', resetPassword);

export default router;
