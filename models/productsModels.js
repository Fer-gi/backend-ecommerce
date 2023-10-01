import dataBase from "../src/database/productsDatabase.js";
import { DataTypes } from "sequelize";


const ProductModel = dataBase.define("products",{
    product_name:{type:DataTypes.STRING},
    product_description:{type:DataTypes.STRING},
    price:{type:DataTypes.NUMBER},
    stock:{type:DataTypes.NUMBER},
    brand_id:{type:DataTypes.NUMBER}
},
    {
        timestamps:false
    })



export default ProductModel;





