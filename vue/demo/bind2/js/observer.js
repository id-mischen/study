
//监听所有属性，递归
function observer(value , vm) {
    if(!value || typeof value !== "object"){
        return ;
    }
    return new Observer(value) ;
}
function Observer(data) {
    this.data = data ;
    this.walk(data);
}
Observer.prototype = {
    walk: function(data){
        let that = this;
        Object.keys(data).forEach(function (key) {
            that.defineReactive(data, key, data[key]) ;
        })
    },
    defineReactive: function (data, key, val) {
        let dep = new Dep() ;
        observer(val); //递归
        Object.defineProperty(data, key, {
            configurable: false,
            enumerable: true,
            get: function () {
                if(Dep.target){
                    dep.depend() //当获取的时候添加订阅者（消息订阅器）
                }
                return val;
            },
            set: function ( newVal ) {
                if( val === newVal){
                    return ;
                }
                val = newVal ;
                dep.notify() ; //发布者
            }
        })
    }
};

let uid = 0;

//消息订阅器
function Dep() {
    this.subs = [];
    this.id = uid++ ; //订阅者唯一标识符
}
Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub) ;       //添加订阅者
    },
    /*addDep: function (dep) { //dep 代表消息订阅器
        if(!this.depIds.hasOwnProperty(dep.id)){ //判断是否存在
            dep.addSub(this); //添加watcher
            this.depIds[dep.id] = dep ;
        }
    },*/
    depend: function(){
        Dep.target.addDep( this ) ; //watcher里面的  Dep.target = this.watcher
    },
    notify:function () {
        this.subs.forEach(function (sub) {
            sub.update();   //通知所有 ，  watcher里面
        })
    }
};
Dep.target = null ; //中间者

















