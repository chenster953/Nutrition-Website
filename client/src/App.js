import { Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Builder from './Pages/Builder/Builder';
import Home from './Pages/Home/Home';
import Method from './Pages/Method/Method';
import NewBlogPost from './Pages/NewBlogPost/NewBlogPost';
import Recipes from './Pages/Recipes/Recipes';
import SingleBlog from './Pages/SingleBlog/SingleBlog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/method" element={<Method />} />
      <Route path="/builder" element={<Builder />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/newblogpost" element={<NewBlogPost />} /> 
      <Route path="/blogs/:id" element={<SingleBlog />} /> 
    </Routes>
  );
}

export default App;
