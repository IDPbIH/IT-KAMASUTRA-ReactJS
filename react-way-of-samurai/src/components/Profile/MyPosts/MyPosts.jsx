import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Textarea } from '../../common/FormsControls/FormsControls';


const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea} placeholder='Post message' validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

const MyPosts = React.memo((props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
});

// class MyPosts extends PureComponent {
    
//     // shouldComponentUpdate(nextProps, nextState) {
//     //     return nextProps != this.props || nextState != this.state;
//     // }
    
//     render() {
//         let postElements = this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

//         let onAddPost = (values) => {
//             this.props.addPost(values.newPostText);
//         };

//         return (
//             <div className={s.postsBlock}>
//                 <h3>My posts</h3>
//                 <AddNewPostFormRedux onSubmit={onAddPost} />
//                 <div className={s.posts}>
//                     {postElements}
//                 </div>
//             </div>
//         )
//     }
// }

export default MyPosts;