const {Master} = require("../models/model");

class MasterController{
    async create(req, res) {
        const {name} = req.body
        const master  = await Master.create({name})
        return res.json(master)
    }
    async getAll(req, res) {
        const  masters  = await Master.findAll()
        return res.json(masters)
    }
}

module.exports = new MasterController()