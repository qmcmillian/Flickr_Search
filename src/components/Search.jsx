import React, { useState } from "react";

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const [tagTitle, setTagTitle] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
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
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search Tag"
          name="userInput"
          value={userInput}
          onChange={onChange}
        />
      </div>
      <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
        Get Images
      </button>
    </form>
  </div>
  )
}

export default Search;
