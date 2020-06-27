import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import Welcome from './components/Welcome'
import SignUp from './components/auth/SignUp'
import Feature from './components/Feature'
import SignOut from './components/auth/SignOut'
import SignIn from './components/auth/SignIn'
import reducers from './reducers'

const store = createStore(
    reducers,
    // initial state -> app checks this when starts up to see if there is a token in localStorage
    {
        auth: { isSignedIn: localStorage.getItem('token') }
    },
    applyMiddleware(reduxThunk)
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route exact path='/' component={ Welcome } />
                <Route exact path='/signup' component={ SignUp } />
                <Route exact path='/feature' component={ Feature } />
                <Route exact path='/signout' component={ SignOut } />
                <Route exact path='/signin' component={ SignIn } />
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)