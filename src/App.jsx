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
import SingInUp from './pages/sing-in-up/sing-in-up';

const addOutlet = (reactComponent) => {
  return <>
    { reactComponent }
    <Outlet/>
  </>
}
const App = () => (
  <>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={addOutlet(<Header />)}>
          <Route path="" element={<HomePage />}/>
          <Route path="shop" element={<ShopPage />}/>
          <Route path="shop/:topic" element={<ShopPage />}/>
          <Route path="signin" element={<SingInUp />} />
          <Route path="*" element={<div>Not found</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
)

export default App;
