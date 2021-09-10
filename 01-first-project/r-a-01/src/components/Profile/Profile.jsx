import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://i.pinimg.com/564x/e9/2d/47/e92d4726f77c744f60f0bd532cfbda89.jpg'></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;