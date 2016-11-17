/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-16
 * @author Li <li@maichong.it>
 */
import { Component } from 'labrador';
import Item from '../item/item';
import * as action from '../../utils/action';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[]
    };
  }
  
  children() {
    return {
      items: this.state.list.map((item) => ({
        component: Item,
        key: item.id+new Date(),
        props: {
          item,
          onChange: (id)=> {
            console.log('id------->>',id);
            action.remove(id)
          }
        }
      }))
    }
  }

  onUpdate(props) {
    console.log('----->>component>>list:', props);
    this.setState({ list: props.list });
  }
}
