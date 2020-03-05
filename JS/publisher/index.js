
/*function Public(){
    this.subscribers = [] ;
    //添加订阅者
    this.addSubscriber = function (subscriber){
        let isExist = this.subscribers.some( (item) => {
            return item ===  subscriber;
        });
        !isExist && this.subscribers.push(subscriber) ;
        return this
    };

    //发布者
    this.deliver = function (data) {
        this.subscribers.forEach( fn => {
            fn(data)
        }) ;
        return this
    }
}*/

//订阅者
/*
let a = function(data){
    console.log("A:",data) ;
};
let b = function(data){
    console.log("B:",data) ;
};

let publisher = new Public() ;
    publisher.addSubscriber(a).addSubscriber(b).addSubscriber(a) ;
    publisher.deliver("我是发布1的消息") ;
    publisher.deliver("我是发布2的消息") ;*/

function Public(){
    this.handlers = {}
}
Public.prototype = {
    //订阅事件
    on: function (eventType, handler) {
        if(!this.handlers[eventType]){
            this.handlers[eventType] = [] ;
        }
        this.handlers[eventType].push(handler) ;
        return this
    } ,
    //触发事件
    emit: function (eventType) {
        let data = [...arguments].splice(1) ;
        console.log(data) ;
        // console.log(Array.prototype.slice.call(arguments, 1));
        for(let i = 0, len = this.handlers[eventType].length; i < len; i++){
            this.handlers[eventType][i].apply(this, data) ;
        }
    },
    //关闭事件
    off: function (eventType, handler) {
        if(this.handlers[eventType]){
            for(let i = 0,len = this.handlers[eventType].length; i < len; i++){
                if(this.handlers[eventType][i] === handler){
                    this.handlers[eventType].splice(i, 1) ;
                }
            }
        }
    }
};










