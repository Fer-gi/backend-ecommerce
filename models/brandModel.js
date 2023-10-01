import dataBase from "../src/database/productsDatabase.js";
import { DataTypes } from "sequelize";


const BrandModel = dataBase.define("brands",{
    brandname:{type:DataTypes.STRING},
},
    {
        timestamps:false
    })



export default BrandModel;