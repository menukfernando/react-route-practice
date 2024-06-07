
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Blog from './Blog';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
