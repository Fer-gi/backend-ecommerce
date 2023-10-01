import express from "express";
import productRouter from "./router/productsRouter.js";
import brandRouter from "./router/brandsRouter.js";
import cors from 'cors';
import dataBase from "./src/database/productsDatabase.js";




export const app = express()

app.use(cors())
app.use(express.json())
app.use('/brands',brandRouter)
app.use('/products',productRouter)

try{
	await dataBase.authenticate()
		console.log('conected to database')
	}catch(error){
		console.log(`error:' ${error}`)
	}


export const server = app.listen(5000,() =>{
    console.log('🚀server up in http://localhost:5000/')
    } )