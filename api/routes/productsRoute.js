const { Router } = require('express')
const ProductController = require('../controllers/ProductController')

const router = Router()

router.get('/products', ProductController.getAllProducts)
router.get('/products/:id', ProductController.getProduct)
router.post('/products', ProductController.createProduct)
router.put('/products/:id', ProductController.updateProduct)
router.delete('/products/:id', ProductController.deleteProduct)

module.exports = router
