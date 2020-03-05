// 添加install方法，便于use使用

import Home from './home'

const eHome = {
  install:function (Vue) {
      Vue.component('home',Home)
  }
};

export default eHome ;