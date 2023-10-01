import  express  from "express";
import { createBrand, deleteBrand, getAllBrands, updateBrand } from "../src/controllers/brandController.js";


const brandRouter = express.Router();
brandRouter.get("/", getAllBrands);
brandRouter.post("/", createBrand);
brandRouter.put("/:id",updateBrand);
brandRouter.delete("/:id",deleteBrand)



export default brandRouter;