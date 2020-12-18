import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Reducers
import Home from './Home/reducer'
import Courses from './Courses/reducer'
import Login from './Login/reducer'

// Root Reducer
const rootReducer = combineReducers({ Home, Courses, Login })
const composeEnhacers = composeWithDevTools({})

export default process.env.NODE_ENV === 'production'
  ? createStore(rootReducer, applyMiddleware(thunk))
  : createStore(rootReducer, composeEnhacers(applyMiddleware(thunk)))
