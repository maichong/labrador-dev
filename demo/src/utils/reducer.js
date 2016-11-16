/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-10
 * @author Li <li@maichong.it>
 */
import {combineReducers} from 'redux';
import {
  LIST_ADD,
  LIST_REMOVE
} from '../utils/contracts';

function list(state = [], action) {
  console.log('------->>redux_list',action);
  if (action.type === LIST_ADD || action.type === LIST_REMOVE) {
    return action.list;
  }
  return state;
}

const reducer = combineReducers({ list });
export default reducer;
