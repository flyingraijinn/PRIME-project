
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Shop from './components/Shop.jsx'
import Cart from './components/Cart.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import { ShopContextProvider } from './components/Context.jsx'
function App() {
  return (
    <div>
      <ShopContextProvider>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
     </Router>
     </ShopContextProvider>
     <Footer/>
     </div>
  )
}

export default App
