import React, { useState, useEffect } from "react";
import axois from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditCategory from "../category/CategoryEdit";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalClose, setModalClose] = useState(false);

  useEffect(() => {
    function getCategories() {
      try {
        axois
          .get("http://localhost:8800/api/category/view")
          .then((res) => {
            setCategories(res.data);
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
  
  const subitData = (e) => {
    setModalOpen(true);
  }

  return (
    <>
    <div className="container mt-5">
      <h1>All Category Details</h1>
      <hr></hr>
      <Link className="btn btn-success float-right mb-3" to={`/categoryAdd`}>
        Add Category
      </Link>
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 &&
              categories.map((item, index) => (
                <tr key={index}>
                  <th>{item.name}</th>
                  <td>{item.description}</td>
                  <td>
                    {/* <Link
                      className="btn btn-success mr-3"
                      to={`/categoryEdit/${item.id}`}
                    >
                      Edit
                    </Link> */}
                    <button
                        className="btn btn-success mr-3"
                        onClick={(e) => subitData(e)}
                      >
                        Edit
                      </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
    <EditCategory modalOpen={modalOpen} modalClose={modalClose}/>
    </>
  );
}


{/* <Form>
<div className="form-group">
  <label>Category Name</label>
  <Field
    type="text"
    // className="form-control"
    id="name"
    name="name"
    onChange={handleChange}
  />
</div>
<div className="form-group">
  <label>Category Description</label>
  <Field
    type="number"
    // className="form-control"
    id="age"
    name="des"
    onChange={handleChange}
  />
  <Field
    name="name"
    // component={FormikAutocomplete}
    fullWidth
    size="small"
    variant="outlined"
    type="text"
  />
</div>
<button type="submit" onClick={handleClick} className="btn btn-primary">
  Submit
</button>
</Form> */}