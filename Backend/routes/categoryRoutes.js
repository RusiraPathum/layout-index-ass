const router = require("express").Router();

router.get("/book" , (req,res)=>{
    res.json("Hellow");
});


module.exports = router;