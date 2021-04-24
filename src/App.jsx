import React, { useState }from 'react';
import NavBar from './components/Navbar';
import Search from './components/Search';
import Feed from './components/Feed';

const App = () => {
  const [images, setImages] = useState([]);

  return (
    <div>
      <NavBar/>
      <Search setImages={setImages}/>
      { images.length === 0 ? null : <Feed images={images}/> }
    </div>
  )
};

export default App;