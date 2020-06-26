import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import authReducer from './authReducer'

export default combineReducers({
    auth: authReducer,
    // key with name of 'form' is required by redux-form
    form: formReducer
})