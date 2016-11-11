// @flow

import { Component, PropTypes } from 'labrador';
import randomColor from '../../utils/random-color';

const { string } = PropTypes;

export default class Title extends Component {

  static propTypes = {
    text: string
  };

  static defaultProps = {
    text: ''
  };

  state = {
    text: '',
    color: randomColor()
  };

  onUpdate(props: $DataMap) {
    this.setState({
      text: props.text
    });
  }

  handleTap() {
    this.setState({
      color: randomColor()
    });
  }
}
