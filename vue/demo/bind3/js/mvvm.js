
function MVVM(options) {
    let that = this ;
    let data = options.data ;
    Object.keys(data).forEach(function (key) {
        that.proxyData(data, key)
    });
    observer(data);
    this.$compile = new Compile(this, options.el);

}
MVVM.prototype = {
    proxyData: function (data, key) { //数据代理，消除data
        Object.defineProperty(this, key, {
            configurable: false,
            enumerable: true,
            get: function () {
                return data[key] ;
            },
            set: function ( newVal ) {
                data[key] = newVal ;
            }
        })
    }
};