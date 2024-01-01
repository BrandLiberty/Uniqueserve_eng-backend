import express from 'express'
import passport from "passport";
const router  = express.Router()

import {contactRequest} from '../controllers/homeController.js';

// Contact Forms 
router.post('/contact-request',contactRequest)

export default router