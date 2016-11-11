/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-10
 * @author Li <li@maichong.it>
 */
import {combineReducers} from 'redux';
function redux(state = 'default',action){
  if(action.type === 'ACTION_REDUX'){
    return action.title;
  }
  return state;
}
const reducer = combineReducers({
  redux
});
export default reducer;
