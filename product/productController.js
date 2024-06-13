const product = require("../Models/productModel");

const productController = {
    async index(req,res,next) {
        let product;
        try{
            product = await product.find();
        }catch(error){
            res.status(404).json({ error: "Server error.",serverError:

            error });

        }
        res.status(200).json(pro);
        
    },
async store(req,res,next){
    let pro;
    try{
        const {category,subcategory,id,description} = req.body;
        pro = await product.create({category,subcategory,id,description});
    }catch(error){
        res.status(500).json({error: 'server error:', serverError:error});
    }
    res.status(201).json(pro);
},
async delete(req,res,next){
    let pro;
    try {
        const {id}= req.body;
        pro= await product.findByIdAndDelete({_id: id});
        
    } catch (error) {
        res.status(500).json({error:'Server error',serverError: error});
        
    }
    res.status(200).json(pro);
}
};
module.exports = productController;