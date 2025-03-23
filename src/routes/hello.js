import express from 'express';
import { index } from '../handlers/helloHandler.js';

const router = express.Router();

router.get('/', index);

export default router;
