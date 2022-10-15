

import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Blog from './components/Blog/Blog';
import CheckOut from './components/CheckOut/CheckOut';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
      <Route path='/' element={ <Home></Home>}></Route>
      <Route path='/home' element={ <Home></Home>}></Route>
      <Route path='/checkOut' element={<CheckOut></CheckOut>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
<Route path='/aboutMe' element={<AboutMe></AboutMe>}></Route>

    </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
