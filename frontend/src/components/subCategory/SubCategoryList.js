import React, { useState, useEffect } from "react";
import axois from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SubCategoryList() {
  const [subCategories, setsubCategories] = useState([]);

  useEffect(() => {
    function getCategories() {
      try {
        axois
          .get("http://localhost:8800/api/subCategory/subCategoryList")
          .then((res) => {
            setsubCategories(res.data);
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

  return (
    <div className="container mt-5">
      <h1>All Sub Category Details</h1>
      <hr></hr>
      <Link className="btn btn-primary float-right mb-3" to={`/subCategoryAdd`}>
        Add Sub Category
      </Link>
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Category Name</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {subCategories.length > 0 &&
              subCategories.map((item, index) => (
                <tr key={index}>
                  <th>{item.idsubCategory}</th>
                  <th>{item.name}</th>
                  <td>{item.subName}</td>
                  <td>{item.description}</td>
                  <td>
                    <Link
                      className="btn btn-success mr-3"
                      to={`/subCategoryEdit/${item.id}`}
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
