const  sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define( 'user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

const Basket = sequelize.define( 'basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Product = sequelize.define( 'product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const Types = sequelize.define( 'types', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Categories = sequelize.define( 'categories', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
})

const Master = sequelize.define( 'master', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    link: {type: DataTypes.STRING}
})

User.belongsToMany(Product, {through: Basket})
Product.belongsToMany(User, {through: Basket})

Master.hasMany(Product)
Product.belongsTo(Master)

Types.hasMany(Product)
Product.belongsTo(Types)

Categories.hasMany(Types)
Types.belongsTo(Categories)

module.exports = {
    User,
    Product,
    Basket,
    Types,
    Master,
    Categories
}



