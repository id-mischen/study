
function MVVM(options) {
    let that = this;
    this.data = data;
    this.vm = this;
    Object.keys(this.data).forEach(function (key) { //实现代理 data.name  --> name
        that.proxyKeys(key)
    });
    observer(this.data);
    new Compile()
    el.innerHTML = this.data[exp] ; //初始化模板数据
    new Wather(this ,exp, function (value) {
        el.innerHTML = value ;
    });
    return this;
}
MVVM.prototype = {
    proxyKeys: function (key) { //添加属性
        let that = this;
        Object.defineProperty(this , key, {
            configurable: false,
            enumerable: true,
            get: function () {
                return that.data[key]
            },
            set: function ( newVal) {
                that.data[key] = newVal ;
            }
        })
    }
};
