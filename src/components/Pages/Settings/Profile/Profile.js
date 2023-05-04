import React from 'react'
import avatarLogo from '../../Dashboard/DashboardAssets/avatar-frame.svg'
import ProfilePictureForm from './ProfilePictureForm'
// import ProfilePictureForm, { AvatarModal, Upload } from './ProfilePictureForm'
import ProfileInformation from './ProfileInformation'

const Profile = () => {
  return (
    <div className=' bg-[#fbfbfb] ' style={{width: '100%', height: '250%', marginLeft: '8%', top: '5%', }}>
      
        <p className=' text-2xl font-semibold mt-8' style={{}}> Profile Picture</p>

      
      <div className='bg-white border border-gray-400 rounded-lg flex items-center mt-6' style={{ width: '1040px', height: "230px", }}>
        <div className=''>
          <ProfilePictureForm />
         

        </div>
        <div>
        <ProfileInformation />

        </div>
        
      </div>
    </div>
  )
}

export default Profile