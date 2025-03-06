import express from 'express'
import { register } from '../controllers/auth.controller.js';

const routes = express.Router();

routes.use('/auth', register)

export default routes