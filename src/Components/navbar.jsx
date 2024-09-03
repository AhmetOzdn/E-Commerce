/* eslint-disable react-hooks/rules-of-hooks */
import '../Css/Navbar.css'
import { useState } from 'react';
//React-Iconst Imports
import { PiBasket } from "react-icons/pi";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { AiFillAlipayCircle } from "react-icons/ai";import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../Redux/Slices/basketSlice';




function navbar() {
const [theme,setTheme] = useState(false)
const navigate = useNavigate();
const {products} = useSelector((store) => store.basket)
const dispatch = useDispatch()

const changeTheme =() => {
   const root = document.getElementById("root");
    if(theme){
        root.style.backgroundColor="black";
        root.style.color="#fff";
    }else{
        root.style.backgroundColor="white";
        root.style.color="#000";
    }
    setTheme(!theme);
}


  return (
    <div className='containerDiv'>
        <div className='flex-row logo-div' onClick={() => navigate("/")}>
        <AiFillAlipayCircle className='brandLogo'/>
            <p>Legacy</p>
        </div>

        <div className='flex-row'>
            <input type="text"  className='navbarInput' placeholder='Ara'/>
           <div>
            {
                theme ?  <FaMoon className='icon' onClick={changeTheme} /> :  <MdWbSunny className='icon'  onClick={changeTheme}/>
            }
           
           
           <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
            <PiBasket className='icon'/>
            </Badge>

           

           </div>
        </div>
    </div>
  )
}

export default navbar