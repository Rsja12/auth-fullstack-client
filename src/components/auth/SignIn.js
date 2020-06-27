import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'

export class SignIn extends Component {

    submitForm = (formProps) => {
        this.props.signin(formProps, () => {
            this.props.history.push('/feature')
        })
    }

    render() {
        // Comes from redux-form
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
                <div>
                    {this.props.errorMessage}
                </div>
                <button>Sign In!</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    errorMessage: state.auth.errorMessage
})

// compose allows us to apply multiple HOCs to a single component
export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
)(SignIn)

