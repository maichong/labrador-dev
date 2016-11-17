/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-17
 * @author Li <li@maichong.it>
 */
import {Component} from 'labrador';

export default class TestItem extends Component{
  constructor(props){
    super(props);
    this.state = {text:''}
  }
  onUpdate(props){
    this.setState({text:props.text});
  }
}
