import  express  from "express";
import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../src/controllers/productsControllers.js";


const productRouter = express.Router();
productRouter.get("/", getAllProducts);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id",deleteProduct)



export default productRouter;