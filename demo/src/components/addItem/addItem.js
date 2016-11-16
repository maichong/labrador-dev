/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-16
 * @author Li <li@maichong.it>
 */
import {Component} from 'labrador';
import * as action from '../../utils/action';

export default class AddItem extends Component {

  state = { text: '' };

  handleInput(e) {
    this.setState({ text: e.detail.value });
  }

  handleTap() {
    action.add(this.state.text);
  }
}
