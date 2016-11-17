/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-17
 * @author Li <li@maichong.it>
 */
import { Component } from 'labrador';
import TestItem from '../testItem/testItem';
export default class TestList extends Component {
  constructor(props) {
    super(props);
    this.state = { list: ['固定数据1', '固定数据2', '固定数据3'] }
  }

  children() {
    let { list } = this.state;
    return {
      items: list.map((item, index) => ({
        component: TestItem,
        key: index,
        props: {
          text: item
        }
      }))
    }
  }
}
