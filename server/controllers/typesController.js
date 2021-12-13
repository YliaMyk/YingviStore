const {Types, Product} = require('../models/model');
const ApiError = require('../error/ApiError');

class TypeController{
    async create(req, res) {
        const {name, categoryId} = req.body
        const types  = await Types.create({name, categoryId})
        return res.json(types)
    }

    async getAll(req, res) {
        let {categoryId} = req.query

        let types;

        if (!categoryId) {
            types = await Types.findAll()
        }
        else {
            types  = await Types.findAndCountAll({where:{categoryId}})
        }
        return res.json(types)
    }
    async getOneCategories(req, res) {

    }
}

module.exports = new TypeController()