import axios from 'axios';

export const getHotTags = () => {
  let url = `https://www.flickr.com/services/rest/?method=flickr.tags.getHotList&api_key=f3aeba8e35ef36892a34fbc218f5c1b2&count=5&format=json&nojsoncallback=1&auth_token=72157719010334242-3c2ff041e4cbb30d&api_sig=007bf1d1a4b4094e6e853a42179b30e8`;

  return axios.get(url)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(err)
    })
};

export const getPhotosMatchingTag = (tag) => {
  let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4a85b2d64a1fd55aa6bf3d856f58fb0c&tags=${tag}&per_page=100&page=1&format=json&nojsoncallback=1`

  return axios.get(url)
    .then(response => {
      return response.data.photos.photo;
    })
    .catch(error => {
      console.log(err)
    })

    // https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
};

