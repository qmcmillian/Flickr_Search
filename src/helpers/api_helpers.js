import axios from 'axios';

export const getPhotosMatchingTag = async (tag) => {
  let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4aa2fc649cc2e5b1dce1aa3ae0a08cd7&tags=$pie&per_page=100&page=1&format=json&nojsoncallback=1`

  const response = await axios.get(url);
  const { data: { photos: { photo }}} = response;
  return photo;
};

// return axios.get(url)
// .then(response => {
//   return response.data.photos.photo;
// })
// .catch(error => {
//   console.log(error)
// })

