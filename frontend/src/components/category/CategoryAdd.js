import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CategoryAdd() {

    // const navigate = useNavigate();

    const [category, setCategory] = useState({
        name: "",
        des: "",
    });

    const handleChange = (e) => {
        setCategory((prev) => ({ ...prev, [e.target.name] : e.target.value }));
    };

    const handleClick = async e => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8800/api/category/create", category)
            // navigate("/category");
        } catch (error) {
            
        }
    }

    console.log(category);

    return (
        <div className="container mt-5">
    
        <h1 className="mb-3">Category Add</h1><hr></hr>
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
            <button type="submit" onClick={handleClick} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      );

}
