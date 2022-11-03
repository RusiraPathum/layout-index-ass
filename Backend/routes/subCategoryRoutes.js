const router = require("express").Router();
const db = require("../config/database");

//category list
router.get("/categoryList", (req, res) => {
  const query = "SELECT * FROM category";

  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//sub category list
router.get("/subCategoryList", (req, res) => {
  const query = "SELECT * FROM subCategory";

  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//sub category create
router.post("/create", (req, res) => {
  const query =
    "INSERT INTO subCategory (`name`, `description`, `categoryId`) VALUES (?)";

  const data = [req.body.name, req.body.des, req.body.catId];

  db.query(query, [data], (err, data) => {
    if (err) return res.json(err);
    return res.json({
      status: 200,
      msg: "Sub Category has been created successfully",
    });
  });
});

//sub category update
router.put("/edit/:id", (req, res) => {
  const query =
    "UPDATE subCategory SET `name` = ?, `description` = ?, `categoryId` = ? WHERE idsubCategory = ?";

  const subCatId = req.params.id;

  const data = [req.body.name, req.body.des, req.body.catId];

  db.query(query, [...data, subCatId], (err, data) => {
    if (err) return res.json(err);
    return res.json({
      status: 200,
      msg: "Sub Category has been updated successfully",
    });
  });
});

//sub category delete
router.delete("/delete/:id", (req, res) => {
  const query = "DELETE FROM subCategory WHERE idsubCategory = ?";

  const subCatId = req.params.id;

  db.query(query, [subCatId], (err, data) => {
    if (err) return res.json(err);
    return res.json({
      status: 200,
      msg: "Sub Category has been deleted successfully",
    });
  });
});

module.exports = router;
