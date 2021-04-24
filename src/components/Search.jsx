import React, { useState } from "react";
import { getPhotosMatchingTag } from '../helpers/api_helpers';

const Search = ({ setImages }) => {
  const [userInput, setUserInput] = useState("");

  const getPhotos = () => {
    getPhotosMatchingTag(userInput)
    .then(images => {
      setImages(images);
    })
    .catch(err => console.log(err));
  }

  const handleSubmit = event => {
    event.preventDefault();
    getPhotos();
    setUserInput('');
  };

  const onChange = event => {
    setUserInput(event.target.value);
  };

  return (
    <div className="card card-body mb-4 p-4">
    <h2 className="display-4 text-center">
      <i className="fas fa-camera" /> Search For A Flick
    </h2>
    <p className="lead text-center">Get the images for any tag</p>
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search Tag"
          name="userInput"
          value={userInput}
          onChange={onChange}
        />
      <button className="btn btn-primary btn-lg btn-block" type="submit">
        Get Images
      </button>
      </div>
    </form>
  </div>
  )
}

export default Search;
