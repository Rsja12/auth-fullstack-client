import axios from 'axios'
import { AUTH_USER } from './types'

// thunk allows us to return a function or an obj
// if we return function it gets called with the dispatch function
// this gives us ability to return(dispatch) as many actions as we want from a single action creator

// export const signup = ({ email, password }) {
//     return function(dispatch) {
//         dispatch({ 
//             type: AUTH_USER,
//             payload: { email, password }
//         })
//     }
// } 
// SAME AS ->

export const signup = formProps => async dispatch => {
    const response = await axios.post('http://localhost:3090/signup', formProps)

    dispatch({
        type: AUTH_USER,
        payload: response.data.token
    })
}