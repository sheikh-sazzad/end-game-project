import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Profile.css';

const Profile = () => {
    const { user } = useAuth();

    return (
        <div className='user-container'>

            <div>
                 <h1  className='mb-4'>User Profile</h1>
            <h3>Name: {user.displayName}</h3>
            <h3>Email: {user.email}</h3>
           </div>

            
        </div>
    );
};

export default Profile;