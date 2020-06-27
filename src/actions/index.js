import axios from 'axios'
import { AUTH_USER, AUTH_ERROR } from './types'

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

export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3090/signup', formProps)
        
        dispatch({
            type: AUTH_USER,
            payload: response.data.token
        })
        // redirection callback
        callback();
    } catch (e) {
        dispatch({
            type: AUTH_ERROR,
            payload: e.response.data.error //-> error message coming from api logic
        })
    }
}