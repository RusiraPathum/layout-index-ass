import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { Field, Form, Formik } from "formik";

export default function SubCategoryAdd() {
  // const navigate = useNavigate();

  const [categorieList, setCategorieList] = useState([]);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  useEffect(() => {

    function getCategories() {
      try {
        axios
          .get("http://localhost:8800/api/category/view")
          .then((res) => {
            // console.log(res.data);
            setCategorieList(res.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      } catch (error) {
        console.log(error);
      }
    }

    getCategories();

  }, []);

  // console.log(categorieList);

  const [subCategory, setSubCategory] = useState({
    name: "",
    des: "",
    catId: 0,
  });

  const handleChange = (e) => {
    setSubCategory((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(subCategory);
    try {
      await axios.post("http://localhost:8800/api/subCategory/create", subCategory);
      // navigate("/category");
    } catch (error) {}
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-3">Sub Category Add</h1>
      <hr></hr>
      <form>
        <div className="form-group">
          <label>Sub Category Name</label>
          <input required
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Category Name</label>
          <select id="catId" name="catId" onChange={handleChange} className="form-control">
            <option>Select Category</option>
            {categorieList.length > 0 &&
              categorieList.map((item, inndex) => (
                <option value={item.id}>{item.name}</option>
              ))}
          </select>
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
        <button type="submit" onClick={handleClick} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
