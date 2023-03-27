import * as Yup from 'yup'
import Category from '../models/Category'
import Product from '../models/Products'
import Orders from '../models/Orders'

class OrderController {
  async store(request, response) {
    const schema = Yup.object().shape({
      products: Yup.array()
        .required()
        .of(
          Yup.object().shape({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
          })
        ),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const productsId = request.body.products.map((product) => product.id)

    const updateProducts = await Product.findAll({
      where: {
        id: productsId,
      },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['name'],
        },
      ],
    })

    const editedProduct = updateProducts.map((product) => {
      const productIndex = request.body.products.findIndex(
        (requestProduct) => requestProduct.id === product.id
      )

      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category.name,
        url: product.url,
        quantity: request.body.products[productIndex].quantity,
      }

      return newProduct
    })

    const order = {
      userId: request.userId,
      userName: request.userName,

      product: editedProduct,
      status: 'pedido realizado',
    }

    const saveOrder = {
      userId: request.userId,
      userName: request.userName,
      productId: editedProduct.id,
      productName: editedProduct.name,
      productPrice: editedProduct.price,
      productUrl: editedProduct.url,
      productQuantify: editedProduct.quantity,
      status: 'pedido realizado',
    }

    await Orders.create(saveOrder)

    return response.status(201).json(order)
  }
}

export default new OrderController()
