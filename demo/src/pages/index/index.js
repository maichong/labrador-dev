// @flow

import { Component, PropTypes } from 'labrador';
import { connect } from 'labrador-redux';
import List from '../../components/list/list';
import AddItem from '../../components/addItem/addItem';

const { array } = PropTypes;

class Index extends Component {

  static propTypes = {
    list: array
  };

  constructor(props) {
    super(props);
    this.state = {
      list: props.list || []
    };
  }

  children() {
    const { list } = this.state;
    return {
      list: {
        component: List,
        props: { list }
      },
      addItem: {
        component: AddItem
      }
    };
  }

  onUpdate(props) {
    this.setState({ list: props.list || [] });
  }
}

export default connect(({ list }) => ({ list }))(Index);
