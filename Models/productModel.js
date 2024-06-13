const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const productSchema= new Schema(
     {
        category:{ type: String},
        subcategory:{type:String},
        id:{type:Number},
        description:{type:String},
     },
     {
        timestamps: true,
     }
);
const product= mongoose.model('product',productSchema);
module.exports = product;


