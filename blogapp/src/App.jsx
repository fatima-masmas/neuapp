import React from 'react';
import { BrowserRouter,  Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link href="/"> Home </Link>
          <Link href="/blog"> Blog </Link>
        </nav>
        <h1> dom 6 </h1>
      
        <Routes>
            <Route path= "/" element={<Home />} />
            <Route path= "/blog" element={<Blog />} />
          </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;

