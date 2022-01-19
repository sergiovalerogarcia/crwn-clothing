import React from 'react';
import { 
  BrowserRouter,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import HomePage from './pages/home/home';
import ShopPage from './pages/shop/shop';

const addOutlet = (reactComponent) => {
  return <>
    { reactComponent }
    <Outlet/>
  </>
}

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={addOutlet(<Header/>)}>
            <Route path="" element={<HomePage />}/>
            <Route path="shop" element={<ShopPage />}/>
            <Route path="shop/:topic" element={<ShopPage />}/>
            <Route path="*" element={<HomePage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
