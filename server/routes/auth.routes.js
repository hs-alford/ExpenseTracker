import express from 'express'
import authControl from '../controllers/auth.controller'

const router = express.Router()

router.route('/auth/signin')
  .post(authControl.signin)
router.route('/auth/signout')
  .get(authControl.signout)

export default router
