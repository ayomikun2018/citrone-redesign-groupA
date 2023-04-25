import React, { useState } from 'react';

import defaultAvatar from '../../Dashboard/DashboardAssets/avatar-frame.svg';
import avatarData from '../Profile/AvatarData'
import TrashIcon from '../../Dashboard/DashboardAssets/thrash.svg'



function ProfileForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  const [avatarDataset, setAvatarDataset] = useState(avatarData)
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024 && /(jpe?g|png|svg)$/i.test(file.type)) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
      alert('Please select a JPG, PNG, or SVG file that is less than 5MB in size.');
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      // simulate a server upload delay of 2 seconds
      setTimeout(() => {
        setUploadStatus('success');
      }, 2000);
    }
  };

  const handleAvatarClick = (avatar) => {
    setSelectedFile({ name: avatar.name, file: avatar.image });
    setShowAvatarModal(false);
  };

  const handleCloseModal = () => {
    setUploadStatus('');
  };

  return (
    <React.Fragment>
    <form onSubmit={handleFormSubmit} className="max-w-md mx-auto mt-8">
      <div></div>
      <div className=" absolute flex left-44 top-32">
        {selectedFile ? (
          <img src={URL.createObjectURL(selectedFile)} alt="Selected Profile" className=" rounded-full object-cover" style={{ width: '150px', height: '150px'}} />
        ) : (
          <img src={defaultAvatar} alt="Default Profile" className=" rounded-full object-cover" style={{ width: '150px', height: '150px'}} />
        )}

      </div>

      <div className="absolute grid top-60" style={{left: '22%'}}>
        <div className='flex mb-4 font-poppins'>
          <label 
            htmlFor="profile-picture-input" 
            className="flex text-black bg-[#f1f1f1] font-normal text-base   font-poppins items-center justify-center rounded-xl" style={{ width: '210px', height: '40px', marginLeft: '6rem', marginTop: '-7rem'}}>
            Upload Profile Picture
          </label>
          <input 
            type="file" 
            id="profile-picture-input" 
            onChange={handleFileChange} 
            accept=".jpg,.jpeg,.png,.svg" 
            className=" hidden " 
          />

          <button 
            type="submit" 
            disabled={!selectedFile} className="flex text-black bg-[#f1f1f1] font-normal text-base  font-poppins items-center justify-center rounded-xl" style={{ width: '210px', height: '40px', marginLeft: '6rem', marginTop: '-7rem'}}>
            Upload
          </button>
         
        </div>
          <div className="grid" style={{marginLeft: '6rem', marginTop: '-4rem'}}>
          <button 
            type="button" 
            onClick={() => setShowAvatarModal(true)}
            className="flex  text-black bg-[white]  font-normal text-base font-poppins items-center justify-center rounded-xl" style={{ width: '210px', height: '40px', border: '1px solid lightGray'}}>
            Use Avatar
          </button>
        </div>
        <span className='ml-24 text-base font-poppins font-medium whitespace-nowrap' >*Must be JPEG, PNG, GIF and should not exceed 5MB </span>

      </div>
      <img src={TrashIcon} alt='thrash-icon' className='absolute' style={{width: '26.67px', height: '26.67', left: '46%', top: '9rem'}}/>

      
      

     {uploadStatus === 'success' && (
        <div className="modal fixed top-20 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center" style={{left: '70rem'}}>
          <div className="modal-content bg-white rounded shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Profile Picture Uploaded Successfully</h2>
            <button onClick={handleCloseModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Close</button>
          </div>
        </div>
      )}
      {showAvatarModal && (
<div className="fixed z-10 inset-0 overflow-y-auto">
  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
      <div className=" absolute inline-block align-bottom w-10/12 bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6" > 
      <div>
      <h3 className=" font-poppinstext-lg text-center leading-6 font-medium text-gray-900">Choose an avatar</h3>
      <p className=' font-poppins text-base mt-8 text-center leading-6 font-medium text-[#A5A5A5]'>Use Initials</p>
        <div className="mt-4 flex flex-wrap">
          {avatarDataset.map((avatar) => (
            <button key={avatar.name} type="button" onClick={() => handleAvatarClick(avatar)} className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-200 focus:outline-none">
            <img src={avatar.image} alt={avatar.name} className="w-24 h-24 rounded-full object-cover" />
            </button>
          ))}
        </div>
      </div>
      <span className=' text-sm whitespace-nowrap text-[#A5A5A5] '>Select your favorite avatar as your profile picture</span>
      <div className="mt-5 sm:mt-6">
      <button type="button" onClick={() => setShowAvatarModal(false)} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm">
      Cancel
      </button>
      </div>
    </div>
  </div>
</div>
)}

</form>

</React.Fragment>
);
}

export default ProfileForm;
