

import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Blog from './components/Blog/Blog';
import CheckOut from './components/CheckOut/CheckOut';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkOut' element={<CheckOut></CheckOut>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/aboutMe' element={<AboutMe></AboutMe>}></Route>
<Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
