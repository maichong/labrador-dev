// @flow

import { Component, PropTypes } from 'labrador';

const { func, string, bool } = PropTypes;

export default class Item extends Component {

  static propTypes = {
    title: string,
    isNew: bool,
    onChange: func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = props;
  }

  onUpdate(props: $DataMap) {
    this.setState(props);
  }

  handleTap() {
    this.props.onChange(this.data.title + '.');
  }
}
