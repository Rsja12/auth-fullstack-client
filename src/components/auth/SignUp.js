import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'

export class SignUp extends Component {

    submitForm = (formProps) => {
        this.props.signup(formProps)
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

// compose allows us to apply multiple HOCs to a single component
export default compose(
    connect(null, actions),
    reduxForm({ form: 'signup' })
)(SignUp)

