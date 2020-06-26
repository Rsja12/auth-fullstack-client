import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/signin'>Sign In</Link>
                <Link to='/signout'>Sign Out</Link>
                <Link to='/feature'>Feature</Link>
            </div>
        )
    }
}

export default Header
