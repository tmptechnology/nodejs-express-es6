import express from 'express';
import {indexPage} from '../services/index.service.js'

const router = express.Router();

/* GET home page. */
router.route('/').get(indexPage);


export default router;
