import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ServiceForm.scss";

function ServiceForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImg] = useState("");

  let navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/api/services/new", {
        title,
        description,
        image_url,
      })
      .then((res) => {
        console.log("SUCCESS");
      })
      .catch((error) => {
        console.log(`Something went wrong : ${error.message}`);
      });

    navigate("/services");
  };

  return (
    <div className="container text-center service-form">
      <form action="/services/new" method="post">
        <div className="d-flex flex-column align-items-start">
          <div class="d-flex flex-column align-items-start ">
            <label for="image_url" class="h5 mb-3">
              Add photo
            </label>
            <input
              id="photos"
              type="text"
              name="image_url"
              placeholder="Image"
              value={image_url}
              onChange={(e) => setImg(e.target.value)}
            ></input>
          </div>
          <div class="d-flex flex-column align-items-start">
            <label for="service_title" class="h5 my-3">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="service_title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>

          <div class="d-flex flex-column align-items-start">
            <label for="service_description" class="h5 my-3">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Description"
              name="service_description"
              cols="19"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button
            className="my-3"
            type="submit"
            value="Submit"
            onClick={submitForm}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default ServiceForm;
