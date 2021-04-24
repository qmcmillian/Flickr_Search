import React from 'react';

const Photo = ({image}) => {
  const imageSource = `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`

  return (
    <div className="col-md">
      <img className="card-img" src={imageSource} />
    </div>
  )
}

export default Photo;