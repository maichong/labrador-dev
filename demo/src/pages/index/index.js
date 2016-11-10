import wx from 'labrador';
import List from '../../components/list/list';
import Title from '../../components/title/title';
import Counter from '../../components/counter/counter';
import {getStore,connect} from 'labrador-redux';
import * as action from '../../utils/action';

const store = getStore();

class Index extends wx.Component {
  data = {
    userInfo: {},
    mottoTitle: 'Hello World',
    count: 0,
    redux:'REDUX_TITLE'
  };

  children = {
    list: new List(),
    motto: new Title({ text: '@redux', hello: '@mottoTitle' }),
    counter: new Counter({ count: '@count', onChange: this.handleCountChange.bind(this) })
  };

  handleCountChange(count) {
    console.log('count,----',count,this);
    this.setData({ count });
  }

  //事件处理函数
  handleViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  }

  async onLoad() {
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
  onReduxHandle(e){
    let num = parseInt(Math.random() * 10);
    store.dispatch(action.redux(num));
  }
  onReady() {
    this.setData('mottoTitle', 'Labrador');
  }
}
export default connect(({redux})=>({redux}))(Index);
