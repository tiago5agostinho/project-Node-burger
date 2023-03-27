import Sequelize, { Model } from 'sequelize'

class Orders extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: Sequelize.STRING,
        userName: Sequelize.STRING,

        productId: Sequelize.INTEGER,
        productName: Sequelize.STRING,
        productPrice: Sequelize.INTEGER,
        productCategory: Sequelize.STRING,
        productUrl: Sequelize.STRING,
        productQuantity: Sequelize.STRING,

        status: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )
    return this
  }
}

export default Orders
