import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export class Header extends Component {

    renderLinks() {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <Link to='/signout'>Sign Out</Link>
                    <Link to='/feature'>Feature</Link>
                </div>
            )
        } 
        return (
            <div>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/signin'>Sign In</Link>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                { this.renderLinks() }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isSignedIn: state.auth.isSignedIn
})

export default connect(mapStateToProps)(Header)
