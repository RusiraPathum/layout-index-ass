import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditCategory() {
  let catId = useParams().id;

  const [category, setCategory] = useState({
    name: "",
    des: "",
  });

  const handleChange = (e) => {
    setCategory((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [catName, setCatName] = useState("");
  const [catDes, setCatDes] = useState("");

  useEffect(() => {
    function getSingelCategory() {
      axios
        .get(`http://localhost:8800/api/category/view/` + catId)
        .then((res) => {
          setCatName(res.data.name);
          setCatDes(res.data.description);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    getSingelCategory();
  }, []);

  // function updateCategory(){

  //   // e.preventDefault();

  //   // console.log(catId);

  //   const obj ={
  //       "name":document.getElementById("name").value,
  //       "des":document.getElementById("des").value};

  //   axios
  //     .put(`http://localhost:8800/api/category/edit/`+catId, obj)
  //     .then(() => {
  //       alert("Category Updated")
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // }

  const updateCategory = async (e) => {
    e.preventDefault();

    try {
      console.log(catId);
      await axios.put(
        "http://localhost:8800/api/category/edit/" + catId,
        category
      );
      // navigate("/category");
    } catch (error) {}
  };

  console.log(category);

  return (
    <div className="container mt-5">
      <h1 className="mb-3">Category Update</h1>
      <hr></hr>
      <form>
        <div className="form-group">
          <label>Category Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Category Description</label>
          <textarea
            type="number"
            className="form-control"
            id="age"
            name="des"
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" onClick={updateCategory} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditCategory;
