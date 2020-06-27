import { AUTH_USER } from "../actions/types"

const INITIAL_STATE = {
    isSignedIn: '',
    errorMessage: ''
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTH_USER:
            return {...state, isSignedIn: action.payload }
        default:
            return state
    }
}