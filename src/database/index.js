import Sequelize from 'sequelize'

import Category from '../app/models/Category'
import Product from '../app/models/Products'
import User from '../app/models/User'
import configDatabase from '../config/database'

const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(configDatabase)
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      )
  }
}

export default new Database()
