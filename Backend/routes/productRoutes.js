const router = require("express").Router();
const db = require("../config/database");
const fileUpload = require("express-fileupload");

//category list
router.get("/productList", (req, res) => {
    const query = "SELECT * FROM product";
  
    db.query(query, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  });

//product create
router.post("/create", (req, res) => {
  let image;
  let uploadPath;

  image = req.files.image;

//   uploadPath = __dirname + "/public/" + image.name;
  console.log(image.data);

//   image.mv(uploadPath, function (err) {
//     if (err) return res.status(500).send(err);
//     res.status(200).json("File Uploaded");
//   });


  const query = "INSERT INTO product (`name`, `description`, `image`) VALUES (?)";

  const data = [req.body.name, req.body.des, req.body.image];

  db.query(query, [data], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json({
      msg: "Product has been created successfully",
    });
  });
});

//product update
router.put("/edit/:id", (req, res) => {
    const query =
      "UPDATE product SET `name` = ?, `description` = ?, `image` = ? WHERE idproduct = ?";
  
    const productId = req.params.id;
  
    const data = [req.body.name, req.body.des, req.body.image];
  
    db.query(query, [...data, productId], (err, data) => {
      if (err) return res.json(err);
      return res.json({
        status: 200,
        msg: "Product has been updated successfully",
      });
    });
  });

  //sub category delete
router.delete("/delete/:id", (req, res) => {
    const query = "DELETE FROM product WHERE idproduct = ?";
  
    const productId = req.params.id;
  
    db.query(query, [productId], (err, data) => {
      if (err) return res.json(err);
      return res.json({
        status: 200,
        msg: "Product has been deleted successfully",
      });
    });
  });

module.exports = router;
