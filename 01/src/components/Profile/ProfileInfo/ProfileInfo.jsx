import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/* <div>
                    <img src='https://i.pinimg.com/564x/e9/2d/47/e92d4726f77c744f60f0bd532cfbda89.jpg'></img>
                </div> */}
            <div className={s.descriptionBlock}>
                <div>id = {props.profile.userId}</div>
                <div><img src={props.profile.photos.large} /></div>
                <ProfileStatus status={'Hello my friends'}/>
            </div>
        </div>
    )

}

export default ProfileInfo;