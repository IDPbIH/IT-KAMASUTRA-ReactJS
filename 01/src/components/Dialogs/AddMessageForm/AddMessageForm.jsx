import React from "react";
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                    validate={[required, maxLength50]}
                    placeholder='Enter your message'
                    name='newMessageBody'
                />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

// export default const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm); �� �� ����� ��� � ����
export default reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);