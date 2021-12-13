const uuid = require('uuid')
const path = require('path')
const {Product} = require('../models/model')
const ApiError = require('../error/ApiError')

class ProductController{
    async create(req, res, next) {
        try {
            const {name, price, description, masterId, typeId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({name, price, description, masterId, typeId, img: fileName})

            return res.json(product)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }

    }
    async getAll(req, res) {
        let {masterId, typeId, limit, page} = req.query

        page = page || 1;
        limit = limit || 4;

        let offset = page * limit - limit;
        let product;

        if (!masterId && !typeId) {
            product = await Product.findAndCountAll({limit, offset})
        }
        else if (masterId && !typeId) {
            product = await  Product.findAndCountAll({where:{masterId}, limit, offset})
        }
        else if (!masterId && typeId) {
            product = await Product.findAndCountAll({where:{typeId}, limit, offset})
        }
        else if (masterId && typeId) {
            product = await Product.findAndCountAll({where:{typeId, masterId}, limit, offset})
        }
        return res.json(product)
    }

    async getOne(req, res) {
        const {id} = req.params
        const product = await Product.findOne({where: {id}})
        return res.json(product)
    }
}

module.exports = new ProductController()