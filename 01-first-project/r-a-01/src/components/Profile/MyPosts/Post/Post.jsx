import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9uFKDM7XSDRSHG2LyI9-q7Sg9C5500PeH0PoOahEJY-2IqJRr6hrUZ40zJeGym3dv3o&usqp=CAU'></img>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;