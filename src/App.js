import logo from './logo.svg';
import './App.css';

import MyNavbar from './component/MyNavbar';
import {MyFooter}  from './component/MyFooter';
import {MyAboutUs}  from './component/MyAboutUs';
import {MyContactUs}  from './component/MyContactUs';
import MyHome from './component/MyHome';
import MyCatagori from './component/MyCatagori';
import {Routes,Route, Navigate} from 'react-router-dom';
import Product from './component/Product';
import MyLogin from './component/MyLogin';
import MySignUp from './component/MySignUp';
import { MycartShop } from './component/MycartShop';
function App() {
  return (
    <>
      <MyNavbar /> 
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<MyHome />}/>
        <Route exact path="/products" element={<MyCatagori/>}/>
        <Route exact path="/products/:id" element={<Product/>}/>
        <Route path="/about" element={<MyAboutUs />}/>
        <Route path="/contact" element={<MyContactUs />}/>
        <Route path="/login" element={<MyLogin />}/>
        <Route path="/signup" element={<MySignUp />}/>
        <Route path="/cart" element={<MycartShop />}/>
      </Routes>
      <MyFooter />
  </>  
  
  );
}

export default App;
