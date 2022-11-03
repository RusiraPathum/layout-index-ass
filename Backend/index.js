const express = require("express");
const categoryRoutes = require("./routes/categoryRoutes");
const subCategoryRoutes = require("./routes/subCategoryRoutes");
const productRoutes = require("./routes/productRoutes");
const fileUpload = require("express-fileupload");

const app = express();
app.use(express.json());
app.use(fileUpload());

//Category route
app.use('/api/category', categoryRoutes);

//Sub Category route
app.use('/api/subCategory', subCategoryRoutes);

//Products route
app.use('/api/product', productRoutes);

app.listen(8800, ()=>{
    console.log("Backend server is running!");
});