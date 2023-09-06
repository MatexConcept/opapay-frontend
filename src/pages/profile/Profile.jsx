import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from '../../components/card/Card'
// import './Profile.scss'
// import profileImg from '../../assets/avatarr.png'
import './ProfileStyles.css'

import useRedirectLogoutUser from '../../customHook/useRedirectLogoutUser'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, selectUser, updateUser } from '../../redux/features/auth/AuthSlice'
import Loader from '../../components/loader/Loader'
import { toast } from 'react-toastify'
import { useLayoutEffect } from 'react'
import Notification from '../../components/notification/Notification'
// import Notify from '../../components/Notify'

const cloud_name = import.meta.env.VITE_CLOUD_NAME;
const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;

export const shortenText = (text, n) => {
  if(text.length > n) {
 const shoretendText = text.substring(0, n).concat("...")

 return shoretendText
  }

  return text
}


const Profile = () => {
    useRedirectLogoutUser("/login")
    const dispatch = useDispatch();
    const {user,isLoading, isLoggedIn, isSuccess, message, } = useSelector((state) => state.auth);
    const initialState = {
        name: user?.name || '',
        email: user?.email ||'',
        phone: user?.phone ||'',
        bio: user?.bio || '',
        photo: user?.photo ||'',
        role: user?.role ||'',
        isVerified: user?.isVerified ?? false,
    }
    const [profile, setProfile] = useState(initialState);
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    
  

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    const handleImageChange = (e) => {
        setProfileImage(e.target.files[0])

        setImagePreview(URL.createObjectURL(e.target.files[0]))
    };
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setProfile({...profile, [name]: value})
    
      };

      const saveProfile = async (e)  => {
        e.preventDefault();
        let imageURL;
        try {
          if (
            profileImage !== null &&
            (profileImage.type === "image/jpeg" ||
              profileImage.type === "image/jpg" ||
              profileImage.type === "image/png")
          ) {
            const image = new FormData();
            image.append("file", profileImage);
            image.append("cloud_name", cloud_name);
            image.append("upload_preset", upload_preset);
    
            // Save image to Cloudinary
            const response = await fetch(
              "https://api.cloudinary.com/v1_1/dpgjqmlum/image/upload",
              { method: "post", body: image }
            );
            const imgData = await response.json();
            console.log(imgData);
            imageURL = imgData.url?.toString()
          }

             
        const userData = {
            name: profile.name,
            phone: profile.phone,
            bio: profile.bio,
            photo: profileImage ? imageURL : profile.photo,
          };
    
          dispatch(updateUser(userData));
      
      
        } catch (error) {
          toast.error(error.message);
        }
      }

      useLayoutEffect(() => {
        if(user){
            setProfile({
                ...profile,
                name: user.name,
                email:user.email,
                phone:user.phone,
                photo:user.photo,
                bio:user.bio,
                role:user.role,
                isVerified:user.isVerified
            });
        }
      }, [user])
  return (
    <>
      {isLoading && <Loader/>}
      {!profile.isVerified &&  <Notification/>  }
        <section>
            <div className='profile-container'>
          
                    {/* <h2>Profile</h2> */}
                    <div className=''>
                      
                        {!isLoading && user && (
                          <>

                            <form onSubmit={saveProfile} className='profile'>
                            
                          
                                    
                                    <div className='img-container'>
                                    <img src={imagePreview === null ? user?.photo 
                                    : imagePreview} alt='profileimage'/>
                                       {/* <h3>Role: {profile?.role}</h3> */}
                                       <input type="file" accept='image/*' name='image' onChange={handleImageChange} />
                                    </div>
                    
                                <p>
                                    {/* <label>Change photo:</label> */}
                                    {/* <input type="file" accept='image/*' name='image' onChange={handleImageChange} /> */}
                                </p>

                                <div className='input_container'>
                                <label className='input_label'>Name:</label>
                                    <input type="text"  name='name' value={profile?.name} onChange={handleInputChange}  className="profile-input" />
                                </div>
                              
                             

                                <div className='input_container' >
                                <label className='input_label'>Email:</label>
                                    <input type="email"  name='email' value={profile?.email} onChange={handleInputChange} disabled  className="profile-input" />

                                </div>
                                

                                
                                    <div className='input_container'>
                                    <label  className='input_label'>Phone:</label>
                                    <input type="text"  name='phone' value={profile?.phone} onChange={handleInputChange}  className="profile-input"  />
                                    </div>
                                
                           
                                  {/* <div className='input_container'>
                                  <label className='input_label'>Bio:</label>
                                   <textarea name='bio' value={profile?.bio} onChange={handleInputChange} className="profile-input" />
                                  </div> */}

                                
                              
                                <button className='purchase--btn'>Update Profile</button>
                            </form>
                                </>
                        )}

                    </div>
            </div>
            
        </section>
       
    </>
  )
  }

  export const UserName = () => {
    
    const user = useSelector(selectUser)

    const username = user?.name || "..."

    return   <p className='--color-white'>Hi,{ shortenText (username, 7)} |</p>
  }




export default Profile