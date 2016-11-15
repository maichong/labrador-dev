// @flow

import { Component } from 'labrador';
import Title from '../title/title';
import Item from '../item/item';
import { sleep } from '../../utils/util';

export default class List extends Component {

  state = {
    items: [
      { title: 'Labrador', isNew: false },
      { title: 'Alaska', isNew: false }
    ]
  };

  children() {
    return {
      title: {
        component: Title,
        props: { text: 'The List Title' }
      },
      items: this.state.items.map((item) => ({
        component: Item,
        key: item.title,
        props: { title: item.title, isNew: item.isNew, onChange: (value) => this.handleChange(item, value) }
      }))
    };
  }

  onLoad() {
    console.log('list on load');
  }

  onReady() {
    //await sleep(1000);
    console.log('list on ready');
    this.setState({
      items: [{ title: 'Collie', isNew: true }].concat(this.state.items)
    });
  }

  handleChange(item: Object, title: string) {
    //TODO fix bug
    // item.title = title;
    // this.setState({
    //   items:this.data.items
    // });
  }
}
