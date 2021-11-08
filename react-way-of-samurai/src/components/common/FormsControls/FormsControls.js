import React from "react";
import styles from "./FormsControls.module.css";

export const FormsControl = ({ el, input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                {React.createElement(el, {...input, ...props})}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

/*вместо {React.createElement(el, {...input, ...props})} <textarea placeholder={props.placeholder} моё изобретение с placeholder, а так не работало {...input} {...props} /> */

export const Textarea = (props) => <FormsControl el="textarea" {...props}/>
export const Input = (props) => <FormsControl el="input" {...props}/>