import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Login from './Login'
import User from "./User"
import NotFound from './NotFound'
const Router1 = () => {
  return (
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/login">Login</Link>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/user/:id" element={<User />} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router1
