import { Router } from 'express';
import hello from './routes/hello.js';

const router = Router();

router.use('/hello', hello);

export default router;
