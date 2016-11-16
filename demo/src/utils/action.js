/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-10
 * @author Li <li@maichong.it>
 */
import {getStore} from 'labrador-redux';
import {
  LIST_ADD,
  LIST_REMOVE
} from './contracts';

const store = getStore();

export function add(text) {
  let list = [].concat(store.getState().list);
  let id = 0;
  if (list.length > 0) {
    id = list[list.length - 1].id;
  }
  let item = { id, text };
  list.push(item);
  console.log('----->>,action_add:',text);
  store.dispatch({
    type: LIST_ADD,
    list
  })
}
export function remove(id){
  let list =[].concat(store.getState().list);
  list.forEach((item,index) => {
    if(item.id === id){
      list.splice(index,1);
    }
  });
  console.log('----->>,action_remove:',list);
  store.dispatch({
    type:LIST_REMOVE,
    list
  })
}
