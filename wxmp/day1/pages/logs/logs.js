//logs.js

const myBehavior = require('../../utils/behaviors.js');

Page({
    behaviors: [myBehavior],
    data: {
        logs: []
    },
    onLoad: function () {
        console.log(this.data) ;
    }
})
