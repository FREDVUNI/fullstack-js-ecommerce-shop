const products = require("../data/products")

exports.getProducts = async(req,res) =>{
    try{
        await res.status(200).json(products)
    }
    catch(error){
        console.log(error.message)
    }
}

exports.getProduct = async(req,res) =>{
    try{
        const id = req.params.id
        const product = products.filter((item) => item.id === Number(id))
        if(!product) return res.status(404).json('product doesnot exist.')

        return await res.status(200).json(product)
    }
    catch(error){
        console.log(error.message)
    }
}