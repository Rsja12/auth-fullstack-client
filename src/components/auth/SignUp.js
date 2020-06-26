import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

export class SignUp extends Component {

    submitForm = (formProps) => {
        console.log(formProps)
    }

    render() {

        // comes from redux form
        const { handleSubmit } = this.props

        return (
            <form onSubmit={ handleSubmit(this.submitForm) }>
                <fieldset>
                    <label>Email</label>
                    <Field 
                        name='email'
                        type='text'
                        component='input'
                        autoComplete='off'
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field 
                        name='password'
                        type='password'
                        component='input'
                        autoComplete='off'
                    />
                </fieldset>
                <button>Sign Up!</button>
            </form>
        )
    }
}

export default reduxForm({ form: 'signup' })(SignUp)
