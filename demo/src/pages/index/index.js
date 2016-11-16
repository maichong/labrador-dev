// @flow

import {Component} from 'labrador';
import List from '../../components/list/list';
import AddItem from '../../components/addItem/addItem';
import {connect} from 'labrador-redux';
class Index extends Component {
  state = {
    list: []
  };

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
    console.log('------>>>props:',props);
    this.setState({ list: props.list });
  }
}

export default connect(({ list }) => ({ list }))(Index);
