import React, { useState }from 'react';
import Photo from './Photo';
import Pagination from './Pagination';

const Feed = ({ images }) => {

  return (
    <div className="container">
      <div className="row text-center text-lg-left">
        {
          images.map(image => {
            return <Photo key={image.id} image={image}/>
          })
        }
      </div>
    </div>
  )
};

export default Feed;