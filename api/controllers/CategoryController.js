const database = require('../models')
class CategoryController {
    static async getAllCategories(req, res) {
        try {
            const allCategories = await database.Categories.findAll()
            return res.status(200).json(allCategories)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async getCategory(req, res) {
        const { id } = req.params
        try {
            const category = await database.Categories.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(category)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async createCategory(req, res) {
        const newCategory = req.body
        try {
            const newCategoryCreated = await database.Categories.create(newCategory)
            return res.status(200).json(newCategoryCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async updateCategory(req, res) {
        const { id } = req.params
        const newUpdate = req.body
        try {
            await database.Categories.update(newUpdate, {
                where: { id: Number(id) }
            })
            const categoryUpdated = await database.Categories.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(categoryUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async deleteCategory(req, res) {
        const { id } = req.params
        try {
            await database.Categories.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ mensagem: `id${id}deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async getCategoryActived(req, res) {
        try {
            const productCategoryActived = await database.Categories.findAll({
                where: { ativo: true, },
                include: { model: database.Products, where: { preco: { [database.Sequelize.Op.gt]: 10, }, }, },
            });
            return res.status(200).json(productCategoryActived);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}
module.exports = CategoryController
