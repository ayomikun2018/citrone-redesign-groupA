import React from 'react';
import  './Header.module.css';
import logo from './landingPageAssets/citrone logo 1.png';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    
    <ul className={' flex flex-row sticky top-0 z-20 bg-red-50 h-32    '}>
        <img src={logo} alt="Logo"  className={'w-17 h-17 mt-11 mr-0 mb-3 ml-8 '}/>
        <h1 className={'font-semibold leading-10 text-3xl mt-14 mb-7 whitespace-nowrap'}>Citrone</h1>
        <Link to ='/#' ><li className={'text-lg leading-7 mt-16 mb-8 ml-16 whitespace-nowrap'}>About Us</li></Link>
        <Link to ='/#'><li className={'text-lg leading-7 mt-16 mb-8 ml-16 whitespace-nowrap '}>Contact Us</li></Link>
        <li className={'text-lg leading-7 mt-16 mb-8 ml-96 whitespace-nowrap'}>Have an account already?</li>
        <Link to ='/login'><button >Log In</button></Link>
    </ul>
   
  )
}
