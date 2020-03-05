// components/header.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title:{
            type: String,
            value: '默认 首页'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        show: 'Rainy'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleShow:function(){
            this.setData({
                show: 'Father Controller Change de'
            })
        },
        onTap:function(){
            this.triggerEvent('myevent',{name: 'MrChen'})
        }
    }
})
