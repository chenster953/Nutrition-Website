import { Routes, Route } from 'react-router-dom';
import Builder from './Pages/Builder/Builder';
import Home from './Pages/Home/Home';
import Recipes from './Pages/Recipes/Recipes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<Home />}/>
      <Route path='/method' element={<Home />}/>
      <Route path='/builder' element={<Builder />}/>
      <Route path='/recipes' element={<Recipes />}/>
    </Routes>
  );
}

export default App;
