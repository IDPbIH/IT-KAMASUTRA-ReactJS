import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://cdn.jpg.wtf/futurico/fb/cd/1496907487-fbcdfc3e065d421ae65c479908fbfc92.png'></img>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;