import React,{useState} from 'react'
import {useNavigate, NavLink } from 'react-router-dom'
import './navbar.css'
const navbar = ({ setSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navigate = useNavigate();
  return (
    <ul id='nav'>
      <ul id='navtop'>
      <li id="navinfo"> Image & Name</li>
        <li id='navicon'><button className='hamburger' onClick={toggleMenu}><img src={menuOpen? "./icons/close.svg" : "./icons/open.svg"} alt="" /></button>
      </li>
      </ul>
        <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
      <li className='navelement'> <NavLink to="/" onClick={() => setMenuOpen(false)}> <img src="./icons/home.svg" alt="" /> Home </NavLink></li>
      <li className='navelement'> <NavLink to="/about" onClick={()=>setMenuOpen(false)}> <img src="./icons/about.svg" alt="" /> About </NavLink></li>
      <li className='navelement'> <NavLink to="/contact" onClick={()=>setMenuOpen(false)}> <img src="./icons/contact.svg" alt="" /> Contact </NavLink></li>
      <li id='searchbox'><img src="./icons/search.svg" alt="" /> <input type="text" placeholder=' Search product(s)' onFocus={()=> navigate("/")} onChange={(e)=>setSearch(e.target.value)} />  </li>
      </ul>
      </ul>
  )
}

export default navbar
