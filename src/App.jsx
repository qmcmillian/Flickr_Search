import React, { useState }from 'react';
import NavBar from './components/Navbar';
import Search from './components/Search';
import Feed from './components/Feed';
import Pagination from './components/Pagination';

const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(10);

  // Get Current Images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <NavBar/>
      <Search
        setImages={setImages}
      />
      { images.length === 0 ? null :
        <div>
          <Feed images={currentImages}/>
          <Pagination
            imagesPerPage={imagesPerPage}
            totalImages={images.length}
            paginate={paginate}
            />
        </div>
      }
    </div>
  )
};

export default App;