import {combineReducers,createStore} from 'redux'
import hotelReducer from './reducers/reducer'
const rootReducer = combineReducers({hotelReducer})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store