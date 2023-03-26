import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import connectDB from "./config/db.js";

// custom modules import
import product from "./routes/product.js"
import productCategory from "./routes/productCategory.js"
import productBrand from "./routes/productBrand.js"
import productTag from "./routes/productTag.js"
import errorHandler from "./middlewares/errorHandler.js";

// express init
const app = express();

// environment variable
dotenv.config();
const PORT = process.env.PORT || 4000;

// express middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use(cors())

// static folder
app.use(express.static('public'));

// routes
app.use("/api/v1/product/category", productCategory)
app.use("/api/v1/product/brand", productBrand)
app.use("/api/v1/product/tag", productTag)
app.use("/api/v1/product", product)

// error Handler
app.use(errorHandler);

// server listen
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`.bgGreen.black);
})