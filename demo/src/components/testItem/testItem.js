/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-17
 * @author Li <li@maichong.it>
 */
import { Component, PropTypes } from 'labrador';

const { string } = PropTypes;
export default class TestItem extends Component {
  static propTypes = {
    text: string
  };

  constructor(props) {
    super(props);
    this.state = { text: props.text }
  }
}
