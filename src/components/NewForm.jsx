import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import IDMaskedInput from "./MaskInput";
class NewForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        }
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isName', (value) => {
            let testName = (value) => (/^[a-zA-Zа-яА-Я]+$/).test(value)
            console.log(testName(value))
            if (testName(value)) {
                return true;
            }
            return false;
        })
        ValidatorForm.addValidationRule('isPhone', (value) => {
            let testPhone = (value) => (/^((8|\+7)[/\- ]?)?(\(?\d{3}\)?[/\- ]?)?[\d\- ]{7,10}$/).test(value)
            console.log(testPhone(value))
            if (testPhone(value)) {
                return true;
            }
            return false;
        })
    }

    handleChange = (event) => {
        switch (event.target.name) {
            case 'id':
                this.setState({ id: event.target.value });
                break;
            case 'firstName':
                this.setState({ firstName: event.target.value });
                break;
            case 'lastName':
                this.setState({ lastName: event.target.value });
                break;
            case 'email':
                this.setState({ email: event.target.value });
                break;
            case 'phone':
                this.setState({ phone: event.target.value });
                break;
            default:
                console.log(event)

        }
    }
    handleSubmit = () => {
            const newForm = {...this.state}
            this.props.pushFormOnStore(newForm)
    }
    render() {
        let { id, firstName, lastName, email, phone } = this.state;
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
                    value={phone}
                    validators={['isPhone']}
                    errorMessages={['phone is not valid']}
                    InputProps={{
                        inputComponent: IDMaskedInput,
                    }}
                >
                </TextValidator>

                <Button type="submit">Submit</Button>
            </ValidatorForm>
        );
    }
}
export default NewForm;

