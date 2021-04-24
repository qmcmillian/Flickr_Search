import React, { useState }from 'react';
import NavBar from './components/Navbar';
import Search from './components/Search';

const App = () => {
  const [images, setImages] = useState([]);

  console.log(images)
  return (
    <div>
      <NavBar/>
      <Search setImages={setImages}/>
    </div>
  )
};

export default App;