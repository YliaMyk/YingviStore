const {Basket} = require('../models/model');
const {where} = require("sequelize");
class BasketController{
    async create(req, res) {
        const {userId, productId} = req.body
        const basket  = await Basket.create({userId, productId})
        return res.json(basket)
    }

    async delete(req, res) {
        const {userId, productId} = req.query
        const basket  = await Basket.findAndCountAll({where:{userId, productId}})
        return res.json(basket)
    }

    async getAll(req, res) {
        let {userId} = req.query
        const  basket = await Basket.findAndCountAll({where:{userId}})
        return res.json(basket)
    }
}

module.exports = new BasketController()