import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "@material-ui/core/Modal";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function EditCategory(props) {
  const { modalOpen, modalClose } = props;

  const [modalCloses, setModalClose] = useState(false);

  let catId = useParams().id;

  // const [category, setCategory] = useState({
  //   name: "",
  //   des: "",
  // });

  // const handleChange = (e) => {
  //   setCategory((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const [catName, setCatName] = useState("");
  // const [catDes, setCatDes] = useState("");

  // useEffect(() => {

  //   console.log("fk");

  //   function getSingelCategory() {
  //     axios
  //       .get(`http://localhost:8800/api/category/view/` + catId)
  //       .then((res) => {
  //         setCatName(res.data.name);
  //         setCatDes(res.data.description);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   }

  //   getSingelCategory();
  // }, []);

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

  // const updateCategory = async (e) => {
  //   e.preventDefault();

  //   try {
  //     console.log(catId);
  //     await axios.put(
  //       "http://localhost:8800/api/category/edit/" + catId,
  //       category
  //     );
  //     // navigate("/category");
  //   } catch (error) {}
  // };

  // console.log(category);

  const closeMod = (e) => {

    console.log("fsdf");
    setModalClose(true);
  }

  return (
    <Modal open={modalOpen} onClose={modalClose}  aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">
      <Box sx={style}>
      <button type="submit" onClick={ (e) => closeMod(e) }><i>X</i></button>
      <div>
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
              // onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Category Description</label>
            <textarea
              type="number"
              className="form-control"
              id="age"
              name="des"
              // onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            // onClick={updateCategory}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
      </Box>
    </Modal>
  );
}

export default EditCategory;
