import React, { useState }from 'react';
import Photo from './Photo';

const Feed = ({ images }) => {
  const firstRow = images.slice(0,5);
  const secondRow = images.slice(5,10)

  return (
  <div className="container">
    <div className="row">
      {
        firstRow.map(image => {
          return <Photo image={image}/>
        })
      }
    </div>
    <div className="row">
    {
        secondRow.map(image => {
          return <Photo image={image}/>
        })
      }
    </div>
  </div>
  )
};

export default Feed;