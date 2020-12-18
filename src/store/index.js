import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Reducers
import Home from './Home/reducer'
import Courses from './Courses/reducer'

// Root Reducer
const rootReducer = combineReducers({ Home, Courses })
const composeEnhacers = composeWithDevTools({})

export default createStore(rootReducer, composeEnhacers(applyMiddleware(thunk)))
