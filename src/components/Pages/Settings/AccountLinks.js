// import React, { useState } from 'react';
// import classNames from 'classnames';
// import {Route, Routes} from 'react-router';
// import { Link } from 'react-router-dom';
// import Profile from './Profile'
// import Privacy from './Privacy'
// import AccountSettingPage from './AccountSettingPage';
// import ThemeAppearance from './ThemeAppearance'


// const AccountLinks = () =>{
//   const [activeLink, setActiveLink] = useState('');

//   const handleLinkClick = (link) => {
//     if (activeLink !== link) {
//       setActiveLink(link);
//     }
//   };

  

  

//   return (
//     <React.Fragment>
//         <div>
//         <AccountLinks />

//         <Routes>
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/theme-appearance" element={<ThemeAppearance />} />
//             <Route path="/setting" element={<AccountSettingPage />} />
//             <Route path="/privacy" element={<Privacy />} />
//         </Routes>
//         </div>
//         <div className="flex setting-table fixed font-poppins" style={{ top: '260px', left: '334px' }}>
//         <div
//             className={classNames(
//             'mr-10 text-gray-400 cursor-pointer relative',
//             activeLink === 'profile' && 'text-red-500'
//             )}
//             onClick={() => handleLinkClick('profile')}
//         >
//             <Link to="/profile">My Profile</Link>
//             <div
//             className={classNames(
//                 'absolute bottom-0 left-0 right-0 w-full h-1 border-b-4',
//                 activeLink === 'profile' ? 'border-red-500' : 'border-transparent'
//             )}
//             style={{ lineHeight: '10px', marginBottom: '-12px', marginLeft: '-8px', width: '110px' }}
//             />
//         </div>

//         <div
//             className={classNames(
//             'mr-10 text-gray-400 cursor-pointer relative',
//             activeLink === 'theme-appearance' && 'text-red-500'
//             )}
//             onClick={() => handleLinkClick('theme-appearance')}
//         >
//         <Link to="/theme-appearance">Theme & Appearance</Link>
//             <div
//             className={classNames(
//                 'absolute bottom-0 left-0 right-0 w-full h-1 border-b-4',
//                 activeLink === 'theme-appearance' ? 'border-red-500' : 'border-transparent'
//             )}
//             style={{ lineHeight: '10px', marginBottom: '-12px', marginLeft: '-8px', width: '205px' }}
//             />
//         </div>

//         <div
//             className={classNames(
//             'mr-10 text-gray-400 cursor-pointer relative',
//             activeLink === 'settings' && 'text-red-500'
//             )}
//             onClick={() => handleLinkClick('settings')}
//         >
//         <Link to="/setting">Account Settings</Link>

//             <div
//             className={classNames(
//                 'absolute bottom-0 left-0 right-0 w-full h-1 border-b-4',
//                 activeLink === 'settings' ? 'border-red-500' : 'border-transparent'
//             )}
//             style={{ lineHeight: '10px', marginBottom: '-12px', marginLeft: '-8px', width: '160px' }}
//             />
//         </div>

//         <div
//             className={classNames(
//             'mr-10 text-gray-400 cursor-pointer relative',
//             activeLink === 'privacy' && 'text-red-500'
//             )}
//             onClick={() => handleLinkClick('privacy')}
//         >
//         <Link to="/privacy"> Privacy</Link>

//             <div
//             className={classNames(
//                 'absolute bottom-0 left-0 right-0 w-full h-1 border-b-4',
//                 activeLink === 'privacy' ? 'border-red-500' : 'border-transparent'
//             )}
//             style={{ lineHeight: '10px', marginBottom: '-12px', marginLeft: '-8px', width: '80px' }}
//             />
//         </div>
//         <div className=' absolute contact-underline top-9 -left-3 border border-[#A5A5A5]' style={{ width: '180%'}}></div>

//         </div>

//     </React.Fragment>
//   );
// }
// export default AccountLinks
import React from 'react'

const AccountLinks = () => {
  return (
    <div>AccountLinks</div>
  )
}

export default AccountLinks