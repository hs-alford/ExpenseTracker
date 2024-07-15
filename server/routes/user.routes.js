import express from 'express'
import userControl from '../controllers/user.controller'
import authControl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/users')
  .get(userControl.list)
  .post(userControl.create)

router.route('/api/users/:userId')
  .get(authControl.requireSignin, userControl.read)
  .put(authControl.requireSignin, authControl.hasAuthorization, userControl.update)
  .delete(authControl.requireSignin, authControl.hasAuthorization, userControl.remove)

router.param('userId', userControl.userByID)

export default router
