'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order', {
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      product: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
        default: [
          {
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,
            },
            name: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            price: {
              type: Sequelize.INTEGER,
              allowNull: false,
            },
            category: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            url: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            quantity: {
              type: Sequelize.STRING,
              allowNull: false,
            },
          },
        ],
      },

      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order')
  },
}
