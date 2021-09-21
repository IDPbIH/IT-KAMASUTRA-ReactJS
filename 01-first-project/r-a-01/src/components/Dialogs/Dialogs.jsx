import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements =
        props.dialogsPage.messages.map(m => {
            if (m.id % 2) {
                return <div className={s.messageLeft}><Message message={m.message}/></div>;
            } else {
                return <div className={s.messageRight}><Message message={m.message}/></div>;
            }
        });

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text};
        props.dispatch(action);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea
                        ref={newMessageElement}
                        value={props.newMessageText}
                        onChange={onMessageChange}
                    />
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;