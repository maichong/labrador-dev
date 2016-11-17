/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-16
 * @author Li <li@maichong.it>
 */
import { Component, PropTypes } from 'labrador';

const { number, string, func } = PropTypes;

export default class Item extends Component {
  static propTypes = {
    id: number,
    text: string,
    onDelete: func
  };

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      text: props.text
    };
  }

  onUpdate(props) {
    this.setState({
      id: props.id,
      text: props.text
    });
  }

  handleDelete() {
    this.props.onDelete(this.state.id);
  }
}
