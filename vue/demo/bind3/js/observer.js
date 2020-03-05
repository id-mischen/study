
function observer(value) {
    if(!value || typeof value != "object"){
        return ;
    }
    new Observer(value);

}
//监听所有属性
function Observer(data) {
    this.data = data;
    this.walk(this.data);
}
Observer.prototype = {
    walk: function (data) {
        let that = this;
        Object.keys(data).forEach(function (key) {
            that.defineReactive(data, key, data[key])
        })
    },
    defineReactive: function (data, key, val) {
        let dep = new Dep() ;
        observer(val);//遍历所有属性
        Object.defineProperty(data, key, {
            configurable: false,
            enumerable: true,
            get: function () {
                if(Dep.target){
                    dep.depend();
                }
                return val
            },
            set: function ( newVal) {
                val = newVal;
                dep.notify() ;
            }
        })
    }
};
//消息订阅器
let uid = 0 ;
function Dep() {
    this.subs = [];
    this.id = uid++ ;
}
Dep.prototype = {
  depend: function () {
      Dep.target.addDep(this) ;
  },
  addSub:function (sub) { //添加watcher
      this.subs.push(sub) ;
  },
  notify:function () {
      this.subs.forEach(function (sub) {
          sub.update() ;
      })
  }
};
Dep.target = null ;














