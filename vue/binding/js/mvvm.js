function MVVM(options) {
    this.$options = options || {};
    let data = this._data = this.$options.data; //new Vue 里面的data
    let that = this;

    // 数据代理
    // 实现 vm.xxx -> vm._data.xxx
    Object.keys(data).forEach(function(key) {
        that._proxyData(key);
    });

    this._initComputed();

    observe(data, this);

    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },

    _proxyData: function(key, setter, getter) {
        let that = this;
        setter = setter ||
        Object.defineProperty(that, key, {
            configurable: false,
            enuthatrable: true,
            get: function proxyGetter() {
                return that._data[key];
            },
            set: function proxySetter(newVal) {
                that._data[key] = newVal;
            }
        });
    },

    _initComputed: function() {
        let that = this;
        let computed = this.$options.computed;
        if (typeof computed === 'object') {
            Object.keys(computed).forEach(function(key) {
                Object.defineProperty(that, key, {
                    get: typeof computed[key] === 'function' 
                            ? computed[key] 
                            : computed[key].get,
                    set: function() {}
                });
            });
        }
    }
};