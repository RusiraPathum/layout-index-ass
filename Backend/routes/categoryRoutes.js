const router = require("express").Router();
const db = require("../config/database");

//category list
router.get("/view", (req, res) => {
  const query = "SELECT * FROM category";

  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//category create
router.post("/create", (req, res) => {
  const query = "INSERT INTO category (`name`, `description`) VALUES (?)";

  const data = [req.body.name, req.body.des];

  db.query(query, [data], (err, data) => {
    if (err) return res.json(err);
    return res.json({
      status: 200,
      msg: "Category has been created successfully",
    });
  });
});

//category update
router.put("/edit/:id", (req, res) => {
  const query =
    "UPDATE category SET `name` = ?, `description` = ? WHERE id = ?";

  const catId = req.params.id;

  const data = [req.body.name, req.body.des];

  db.query(query, [...data, catId], (err, data) => {
    if (err) return res.json(err);
    return res.json({
      status: 200,
      msg: "Category has been updated successfully",
    });
  });
});

//category delete
router.delete("/delete/:id", (req, res) => {
  const query = "DELETE FROM category WHERE id = ?";

  const catId = req.params.id;

  db.query(query, [catId], (err, data) => {
    if (err) return res.json(err);
    return res.json({
      status: 200,
      msg: "Category has been deleted successfully",
    });
  });
});

module.exports = router;
