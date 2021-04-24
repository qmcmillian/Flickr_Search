import React from 'react';

const Photo = ({image}) => {
  const imageSource = `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`

  return (
    <div className="col-lg-3 col-md-4 col-6">
      <img className="img-fluid img-thumbnail" src={imageSource} />
    </div>
  )
}

export default Photo;