import React from "react";
import {Route,Routes} from 'react-router-dom'
import HomePage from "./pages/homePage/HomePage";
import HotelsPage from "./pages/hotels/HotelsPage";
import HotelDetail from "./pages/hotelsDetail/HotelDetail";
import Login from "./pages/login/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/hotels" element={<HotelsPage/>}/>
      <Route path="/hotel/:id" element={<HotelDetail/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
