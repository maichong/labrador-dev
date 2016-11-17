/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-16
 * @author Li <li@maichong.it>
 */
import { Component } from 'labrador';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      text:''
    };

  }

  onUpdate(props) {
    console.log('----->>>compoennt>>item:', props);
    this.setState({ ...props.item });
  }

  handleDelete() {
    this.props.onChange(this.state.id);
  }
}
