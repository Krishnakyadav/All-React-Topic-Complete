import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Login from './Login'
import User from "./User"
import NotFound from './NotFound'
import Products from './Products'
import Phone from './Phone'
import Laptop from './Laptop'
const Router1 = () => {
  return (
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/login">Login</Link>
    <Link to="/product">product</Link>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/user/:id" element={<User />} />
      <Route path='/product'element={<Products/>}>
      <Route path='phone' element={<Phone/>}/>
      <Route path='laptop' element={<Laptop/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router1
