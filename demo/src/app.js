import { createStore } from 'redux';
import { setStore } from 'labrador-redux';
import reducer from './utils/reducer';
let store = createStore(reducer);
setStore(store);
export default class {
  async onLaunch() {
  }
}
