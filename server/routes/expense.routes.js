import express from 'express'
import expenseControl from '../controllers/expense.controller'
import authControl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/expenses/current/preview')
  .get(authControl.requireSignin, expenseControl.currentMonthPreview)

router.route('/api/expenses/by/category')
  .get(authControl.requireSignin, expenseControl.expenseByCategory)

router.route('/api/expenses/plot')
  .get(authControl.requireSignin, expenseControl.plotExpenses)

router.route('/api/expenses/category/averages')
  .get(authControl.requireSignin, expenseControl.averageCategories)

router.route('/api/expenses/yearly')
  .get(authControl.requireSignin, expenseControl.yearlyExpenses)

router.route('/api/expenses')
  .post(authControl.requireSignin, expenseControl.create)
  .get(authControl.requireSignin, expenseControl.listByUser)

router.route('/api/expenses/:expenseId')
  // .get(authControl.requireSignin, expenseControl.read)
  .put(authControl.requireSignin, expenseControl.hasAuthorization, expenseControl.update)
  .delete(authControl.requireSignin, expenseControl.hasAuthorization, expenseControl.remove)

router.param('expenseId', expenseControl.expenseByID)

export default router
