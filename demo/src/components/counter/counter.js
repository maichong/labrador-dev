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
  state = {
    num: 0
  };

  //监听props值的改变
  onUpdate(nextProps: $DataMap) {
    if (nextProps.count !== this.props.count) {
      //props.count 值发生了变化，更新data
      this.setState({ num: nextProps.count * 2 });
    }
  }

  handleTap() {
    let count = this.props.count + 1;
    if (this.props.onChange) {
      this.props.onChange(count);
    }
  }
}
