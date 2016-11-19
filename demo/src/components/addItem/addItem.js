/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-16
 * @author Li <li@maichong.it>
 */
import { Component, PropTypes } from 'labrador-immutable';
import * as action from '../../utils/action';

const { string } = PropTypes;
export default class AddItem extends Component {
  static propTypes = {
    text: string
  };

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleInput(e) {
    this.setState({ text: e.detail.value });
  }

  handleTap() {
    action.add(this.state.text);
  }
}
