// @flow

import wx, { Component } from 'labrador';
import List from '../../components/list/list';
import Title from '../../components/title/title';
import Counter from '../../components/counter/counter';
import { getStore, connect } from 'labrador-redux';
import * as action from '../../utils/action';

export default class Index extends Component {
  state = {
    userInfo: {},
    mottoTitle: 'Hello World',
    count: 0,
    redux: 'REDUX_TITLE'
  };

  children() {
    const { mottoTitle, count } = this.state;
    return {
      list: {
        component: List
      },
      motto: {
        component: Title,
        props: { text: mottoTitle }
      },
      counter: {
        component: Counter,
        props: { count }
      }
    };
  }

  async onLoad() {
    console.log('index onLoad');
    try {
      //调用应用实例的方法获取全局数据
      let userInfo = await wx.app.getUserInfo();
      //更新数据
      this.setData({ userInfo });
      this.update();
    } catch (error) {
      console.error(error.stack);
    }
  }

  onReduxHandle(e) {
    let num = parseInt(Math.random() * 10);
    store.dispatch(action.redux(num));
  }

  onReady() {
    console.log('onReady');
    //this.setData('mottoTitle', 'Labrador');

    console.dir(this);
    this.setState({
      count: 12
    });
  }

  handleCountChange(count: number) {
    this.setData({ count });
  }

  //事件处理函数
  handleViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  }
}
export default connect(({ redux })=>({ redux }))(Index);
