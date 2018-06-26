import {combineReducers} from 'redux';
import user from './users';
import contacts from './contacts'

export default combineReducers({
  user,
  contacts,
})