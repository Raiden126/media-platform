// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"
// require('dotenv').config()
import dotenv from 'dotenv'
import connectDb from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path: './.env'
})

connectDb()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log('MONGODB connection failed !!!', error)
})













// 1st approach (basic)
/*
import express from "express";
const app = express();
(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log(error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`app is running on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.log(error)
        throw error
    }
})()
*/