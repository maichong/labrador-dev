/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-16
 * @author Li <li@maichong.it>
 */

import { Component, PropTypes } from 'labrador';
import Item from '../item/item';
import * as action from '../../utils/action';

const { array } = PropTypes;

export default class List extends Component {

  static propTypes = {
    list: array.isRequired
  };

  children() {
    return {
      items: this.props.list.map((item) => ({
        component: Item,
        key: item.id,
        props: {
          id: item.id,
          text: item.text,
          onDelete: this.handleDelete
        }
      }))
    };
  }

  handleDelete(id) {
    action.remove(id);
  }
}
