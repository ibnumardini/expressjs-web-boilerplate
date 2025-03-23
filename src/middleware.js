import { Router } from 'express';
import config from './middlewares/config.js';

const router = Router();

router.use(config);

export default router;
