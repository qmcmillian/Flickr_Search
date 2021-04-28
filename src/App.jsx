import React, { useState, useEffect }from 'react';
import NavBar from './components/Navbar';
import Search from './components/Search';
import Feed from './components/Feed';
import  { getPhotosMatchingTag } from './helpers/api_helpers';
import ReactPaginate from 'react-paginate';

const App = () => {
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const imagesPerPage = 10;
  const pagesVisited = pageNumber * imagesPerPage;

  const displayImages = images.slice(pagesVisited, pagesVisited + imagesPerPage)
  const pageCount = Math.ceil(images.length / imagesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    document.body.style.overflow = 'auto'

  }

  const scrollPosition =  window.scrollY
  console.log(scrollPosition)

  useEffect(() => {
    getPhotosMatchingTag()
    .then(images => {
      setImages(images);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <NavBar/>
      <Search
        setImages={setImages}
      />
      { images.length === 0 ? null :
        <>
          <Feed images={displayImages}/>
        </>
      }
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  )
};

export default App;