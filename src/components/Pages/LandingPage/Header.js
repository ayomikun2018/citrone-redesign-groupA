import React from 'react';
import  './Header.module.css';
import logo from './landingPageAssets/citrone logo 1.png';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

export default function Header() {
 

  
  return (
    <section  className={classes.header}>
    <div className={classes.navDiv}>
      <div className={classes.navLogo}>
        <img src={logo} alt="Logo" />
        <h1 >Citrone</h1>
      </div>
      <ul className={classes.navUl}>
      <Link to ='/#' ><li>About Us</li></Link>
      <Link to ='/#'><li>Contact Us</li></Link>
      </ul>
    </div>
    <div className={classes.login}>
      <p >Have an account already?</p>
      <Link to='/login'><button  >Log In</button></Link>
    </div>
    </section>
  )
}









// className='flex justify-between items-center h-32 px-8 ] mx-auto sticky  border-solid border-2 border-indigo-600'>
//         <img src={logo} alt="Logo"  className={'mt-2 h-17 w-17'}/>
//         <h1 className={'font-semibold leading-10 text-3xl  w-full'}>Citrone</h1>
//         <ul className={'flex whitespace-nowrap '}>
//           <Link to ='/#' ><li className={'text-lg leading-7 p-4 mr-96'}>About Us</li></Link>
//           <Link to ='/#'><li className={'text-lg leading-7 p-4'}>Contact Us</li></Link>
       
//           <li className={'text-lg leading-7 p-4'}>Have an account already?</li>
//         </ul>
//         <Link to =><button className='whitespace-nowrap  border-solid border-2 border-indigo-600' >Log In</button></Link>


{/* <ul className={' flex flex-row sticky top-0 z-20 bg-red-50 h-32 w-full  '} >
<img src={logo} alt="Logo"  className={'w-17 h-17 mt-11 mr-0 mb-3 ml-8 '}/>
<h1 className={'font-semibold leading-10 text-3xl mt-14 mb-7 whitespace-nowrap'}>Citrone</h1>
<Link to ='/#' ><li className={'text-lg leading-7 mt-16 mb-8 ml-16 whitespace-nowrap'}>About Us</li></Link>
<Link to ='/#'><li className={'text-lg leading-7 mt-16 mb-8 ml-16 whitespace-nowrap '}>Contact Us</li></Link>
<li className={'text-lg leading-7 mt-16 mb-8 ml-96 whitespace-nowrap'}>Have an account already?</li>
<Link to ='/login'><button >Log In</button></Link> 
</ul> */}
   {/* <li className='p-4 text-lg leading-7'>Have an account already?</li> */}

    
      {/* <section  className='flex  items-center h-32 drop-shadow-md  bg-blue-500'>
      <img src={logo} alt="Logo"  className={'  p-4'}/>
       <h1 className=' w-full text-3xl font-semibold'>Citrone</h1>
        <ul className='hidden md:flex whitespace-nowrap'>
        <Link to ='/#' ><li className={'p-4 text-lg leading-7'}>About Us</li></Link>
        <Link to ='/#'><li className={'p-4 text-lg leading-7 '}>Contact Us</li></Link>
        <li className='p-4 text-lg leading-7'>Have an account already?</li>
        <button  >Log In</button> */}

      {/* <button >Log In</button> */}
      {/* <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div> */}


      {/* <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full drop-shadow-none pt-16 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] shadow-none'}>
           <div className='flex'>
              <img src={logo} alt="Logo"  className={''}/>
              <h1 className='w-full text-2xl font-bold text-black m-4'>Citrone</h1>
              
          </div>
          <Link to ='/#' ><li className='p-4 border-b border-gray-600'>About Us</li></Link>
          <Link to ='/#'><li className='p-4 border-b border-gray-600'>Contact Us</li></Link>

      </ul> */}