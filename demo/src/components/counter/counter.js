// @flow

import wx, { Component, PropTypes } from 'labrador';

const { number, func } = PropTypes;

export default class Counter extends Component {

  //属性类型
  static propTypes = {
    count: number,
    onChange: func.isRequired
  };

  //默认属性值
  static defaultProps = {
    count: 0
  };

  //初始state数据
  constructor(props: $DataMap) {
    super(props);
    this.state = {
      num: props.count * 2
    };
  }

  //监听props值的改变
  onUpdate(nextProps: $DataMap) {
    if (nextProps.count !== this.props.count) {
      //props.count 值发生了变化，更新data
      this.setState({ num: nextProps.count * 2 });
    }
  }

  handleTap() {
    console.log('counter tap');
    console.log('this.props', this.props);
    let count = this.props.count + 1;
    if (this.props.onChange) {
      this.props.onChange(count);
    }
  }
}
