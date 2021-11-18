import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            {/* <div>
                    <img src='https://i.pinimg.com/564x/e9/2d/47/e92d4726f77c744f60f0bd532cfbda89.jpg'></img>
                </div> */}
            <div className={s.descriptionBlock}>
                <div>id = {profile.userId}</div>
                <div><img src={profile.photos.large || userPhoto} className={s.mainPhoto}/></div>
                <div>{isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}</div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )

}

export default ProfileInfo;