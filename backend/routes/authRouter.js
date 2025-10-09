import express from 'express'
import { register, login, logout, sentVeriFyOtp, verifyEmail, isAuthenticated, sendResetOtp, resetPassword } from '../controller/authController.js'
import userAuth from '../middleware/userAuth.js'

const authRouter = express.Router()

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.post('/logout', logout)
authRouter.post('/send-verify-otp', userAuth, sentVeriFyOtp)
authRouter.post('/verify-account', userAuth, verifyEmail)
authRouter.get('/is-auth', userAuth, isAuthenticated)
authRouter.post('/send-reset-otp', sendResetOtp)
authRouter.post('/reset-password', resetPassword)

export default authRouter