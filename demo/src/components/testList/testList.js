/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-17
 * @author Li <li@maichong.it>
 */
import {Component} from 'labrador';
import TestItem from '../testItem/testItem';

export default class TestList extends Component{
  constructor(props) {
    super(props);
    this.state = {list:['1234','abcd','5678']}
  }
  children(){
    let { list } = this.state;
    return {
      items:list.map((item,index) => {
      let r = {
        component:TestItem,
          key:index,
          props:{
          item
        }
      }
        console.log('=======>>',r);
        return r;
      })
    }
  }
  onUpdate(props){
    this.setState({list:props.list})
  }
}
