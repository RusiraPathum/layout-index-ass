const express = require("express");
const categoryRoutes = require("./routes/categoryRoutes");
const subCategoryRoutes = require("./routes/subCategoryRoutes");

const app = express();
app.use(express.json());

//Category route
app.use('/api/category', categoryRoutes);

//Sub Category route
app.use('/api/subCategory', subCategoryRoutes);

app.listen(8800, ()=>{
    console.log("Backend server is running!");
});