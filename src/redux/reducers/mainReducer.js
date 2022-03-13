import { combineReducers } from 'redux'

import citiesReducer from './citiesReducer'
import userReducer from "./userReducer"
import itinerariesReducer from './itinerariesReducer'


const mainReducer = combineReducers({

    citiesReducer,
    userReducer,
    itinerariesReducer    
    

})

export default mainReducer