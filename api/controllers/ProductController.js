const database = require('../models')
class ProductController {
    static async getAllProducts(req, res) {
        try {
            const allProducts = await database.Products.findAll()
            return res.status(200).json(allProducts)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async getProduct(req, res) {
        const { id } = req.params
        try {
            const product = await database.Products.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(product)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async createProduct(req, res) {
        const newProduct = req.body
        try {
            const newProductCreated = await database.Products.create(newProduct)
            return res.status(200).json(newProductCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async updateProduct(req, res) {
        const { id } = req.params
        const newUpdate = req.body
        try {
            await database.Products.update(newUpdate, {
                where: { id: Number(id) }
            })
            const productUpdated = await database.Products.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(productUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async deleteProduct(req, res) {
        const { id } = req.params
        try {
            await database.Products.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ mensagem: `id${id}deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}
module.exports = ProductController
