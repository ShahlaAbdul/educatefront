import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import AddPage from './Pages/AddPage/AddPage';
import { BrowserRouter } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Wishlist from './Pages/Wishlist/Wishlist';

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route element={<MainLayout></MainLayout>}>
      <Route path="/" element={<Home></Home>}/> 
      <Route path='/add' element={<AddPage></AddPage>}/>
      <Route path='/wishlist' element={<Wishlist></Wishlist>} > </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
