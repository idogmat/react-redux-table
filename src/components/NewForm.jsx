import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class NewForm extends React.Component {
    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        // ValidatorForm.addValidationRule('isName', (value) => {
        //     console.log((/^[A-Z][a-z]/).test(value))
        //         if ((/^[A-Z][a-z]/).test(value) === true) {
        //             return false;
        //         }
        //             return true;
        // })

        //     console.log(value !==/^[А-ЯЁ][а-яё]+$/)
        //     if (value !== /^[A-Z][a-z]/) {
        //         return false;
        //     }
        //         return true;
        // });
    }
    state = {
        id: '',
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
    }
    handleChange = (event) => {
        switch (event.target.name){
            case 'id':
                this.setState({ id: event.target.value});
                break;
            case 'firstName':
                this.setState({ firstName: event.target.value});
                break;
            case 'lastName':
                this.setState({ lastName: event.target.value});
                break;
            case 'email':
                this.setState({ email: event.target.value});
                break;
            case 'phone':
                this.setState({ phone: event.target.value});
                break;
            default:
                console.log(event)

        }
    }
    handleSubmit = () => {
        // your submit logic
    }
    render() {
        let { id,firstName,lastName,email,phone } = this.state;
        return (
            <ValidatorForm className="ValidatorForm"
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    label="id"
                    onChange={this.handleChange}
                    name="id"
                    type='number'
                    value={id}
                    validators={['required']}
                    errorMessages={['this field is required', 'id is not valid']}
                />
                <TextValidator
                    label="firstName"
                    onChange={this.handleChange}
                    name="firstName"
                    type='text'
                    value={firstName}
                    validators={['isName']}
                    errorMessages={['firstName is not valid']}
                />
                <TextValidator
                    label="lastName"
                    onChange={this.handleChange}
                    name="lastName"
                    type='text'
                    value={lastName}
                    validators={['isName']}
                    errorMessages={['this field is required', 'lastName  is not valid']}
                />
                <TextValidator
                    label="email"
                    onChange={this.handleChange}
                    name="email"
                    type='email'
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <TextValidator
                    label="phone"
                    onChange={this.handleChange}
                    name="phone"
                    type='phone'
                    value={phone}
                    validators={['required']}
                    errorMessages={['this field is required', 'phone is not valid']}
                />
                <Button type="submit">Submit</Button>
            </ValidatorForm>
        );
    }
}
export default NewForm;

