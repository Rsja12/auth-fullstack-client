import React, { Component } from 'react'

import requireAuth from './requireAuth'

export class Feature extends Component {
    render() {
        return (
            <div>
                You can only see this if you're authenticated!
            </div>
        )
    }
}

export default requireAuth(Feature)
