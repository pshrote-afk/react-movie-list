import './css/App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from './contexts/MovieContext'
import NavBar from "./components/NavBar"

function App() {
  return (
    <div>
      <NavBar /> 
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fav" element={<Favorites />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App;
