import Sequelize from 'sequelize'
import User from '../app/models/User'
import configDataBase from '../config/database'
import Products from '../app/models/Products'
import Category from '../app/models/Category'
import Orders from '../app/models/Orders'

const models = [User, Products, Category, Orders]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(configDataBase)
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      )
  }
}

export default new Database()
