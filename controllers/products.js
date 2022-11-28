import Product from "../productModel.js"

export const getProducts = async (req, res) => {
    try {
        const insertedProducts = await Product.insertMany([
            {
                title: "product1", img: "", price: 20,
                quantity: 1, desc: "lorem ipasue"
            },
            {
                title: "product2", img: "", price: 30,
                quantity: 2, desc: "lorem dollor"
            }
        ]);

        res.status(200).json(insertedProducts)
    } catch (error) {
        res.send({ message: error })
    }
}