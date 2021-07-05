import { Router } from 'express';
import { getPrivateData } from '../controllers/private';
import { protect } from '../middleware/auth';
const router = Router();

router.get('/', protect, getPrivateData);

export default router;
