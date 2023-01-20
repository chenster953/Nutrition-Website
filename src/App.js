import { Routes, Route } from 'react-router-dom';
import Builder from './Pages/Builder/Builder';
import Home from './Pages/Home/Home';
import NewBlogPost from './Pages/NewBlogPost/NewBlogPost';
import Recipes from './Pages/Recipes/Recipes';
import SingleBlog from './Pages/SingleBlog/SingleBlog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/method" element={<Home />} />
      <Route path="/builder" element={<Builder />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/newblogpost" element={<NewBlogPost />} /> 
      <Route path="/blogs/:id" element={<SingleBlog />} /> 
    </Routes>
  );
}

export default App;
