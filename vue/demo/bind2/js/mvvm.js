
function MVVM(options) {
    this.$options = options || {} ;
    let data = this._data = this.$options.data ;
    let that = this;
    //①数据代理：将属性添加到vm上
    Object.keys(data).forEach(function (key) { //username nav
        that._proxyData(key);
    });
    this._initComputed();
    //② 观察者、监听者
    // observer(data , this) ;
    //③ 连接观察者和监听者
    this.$compile = new Compile(options.el || document.body, this);
}
MVVM.prototype = {
    _proxyData: function (key) {
        let that = this;
        Object.defineProperty(this, key, {
            configurable:false,
            enumerable: true,
            get: function () {
                console.log("get",key) ;
                return that._data[key] ;
            },
            set: function ( newVal ) {
                console.log("set") ;
                that._data[key] = newVal ;
            }
        })
    },
    _initComputed: function () {

    }
};