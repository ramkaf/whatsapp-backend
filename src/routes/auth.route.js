import express from 'express'
import  { login, logout, refreshToken, register } from './../controllers/auth.controller.js'
import trimRequest from 'trim-request'

const authRoute = express.Router()
authRoute.use(trimRequest.all)

authRoute.route('/register').post( register)
authRoute.route('/login').post(login)
authRoute.route('/logout').post(logout)
authRoute.route('/refresh-token').post(refreshToken)

export default authRoute