const { Router } = require('express')
const CategoryController = require('../controllers/CategoryController')

const router = Router()

router.get('/categories', CategoryController.getAllCategories)
router.get('/categories/:id', CategoryController.getCategory)
router.post('/categories', CategoryController.createCategory)
router.put('/categories/:id', CategoryController.updateCategory)
router.delete('/categories/:id', CategoryController.deleteCategory)

module.exports = router
