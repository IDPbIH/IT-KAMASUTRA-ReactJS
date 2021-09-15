import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    /*let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);*/

    // let newArray =
    //     oldArray.map((e1) => {
    //         return isMaleName(e1) ? 1 : 0;
    //     })

    let messagesElements =
        props.state.messages.map(m => {
            if (m.id % 2) {
                return <div className={s.messageLeft}><Message message={m.message}/></div>;
            } else {
                return <div className={s.messageRight}><Message message={m.message}/></div>;
            }
        })


    // let messagesElements = props.state.messages.map((e1) => isMaleName(e1) ? 1 : 0)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;