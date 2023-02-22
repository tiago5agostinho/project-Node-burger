import Sequelize, { Model } from 'sequelize'

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: Sequelize.STRING,
        userName: Sequelize.STRING,
        product: [
          {
            id: Sequelize.INTEGER,
            name: Sequelize.STRING,
            price: Sequelize.INTEGER,
            category: Sequelize.STRING,
            url: Sequelize.STRING,
            quantity: Sequelize.STRING,
          },
        ],
        status: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )
  }
}

export default Order
