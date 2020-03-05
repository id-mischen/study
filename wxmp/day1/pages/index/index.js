//index.js
//获取应用实例
const app = getApp() ;
const myBehavior = require('../../utils/behaviors.js') ;

Page({
    behaviors:[myBehavior],
    data: {
        motto: 'Hello World',
        title: '父组件的数据'
    },
    onLoad: function () {
        console.log(this.selectComponent('#component-header')) ;
    },
    goPage: function(){
        this.data.sharedText = 'cc' ;
        wx.navigateTo({
            url: '/pages/logs/logs',
        })
    },
    onMyEvent: function( data ){
        console.log("子组件触发")
        console.log( data ) ;
        this.setData({
            title: 'AA'
        })
    }
  
})
