import React from 'react';
import { 
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  useParams,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page/home-page';

const Shop = () => {
  const params = useParams();
  return <h1>{ params.topic }</h1>
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet/>}>
          <Route path="" element={<HomePage />}/>
          <Route path="shop/:topic" element={<Shop />}/>
          <Route path="*" element={<HomePage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
