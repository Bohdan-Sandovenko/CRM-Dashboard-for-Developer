
import { Routes, Route } from "react-router-dom";
import  Home   from "./pages/Home.jsx";
import  Profile  from "./pages/Profile.jsx";
import  Statystic  from "./pages/Statystic.jsx"
import './App.css'
import Sidebar from './components/sidebar'

function App() {

  return (
    <>
      <Sidebar />
      <Routes>
          <Route path="home" element={<Home />}/> //index
          <Route path="profile" element={<Profile />}/>
          <Route path="statystic" element={<Statystic />}/>
      </Routes>
    </>
  )
}

export default App
