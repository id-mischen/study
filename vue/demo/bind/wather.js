

//实现wather,初始化时，添加到订阅器中
function Wather(vm, exp ,cb) {
    this.cb = cb ;
    this.vm = vm;
    this.exp = exp ;
    this.value = this.get();
}
Wather.prototype = {
    update: function (){
        this.run();
    },
    run: function(){
        let value = this.vm.data[this.exp];
        let oldVal = this.value;
        if( oldVal !== value){
            this.value = value;
            this.cb.call(this.vm, value, oldVal) ;
        }

    },
    get: function () {
        Dep.target = this; //缓存自己, 中间者
        let value = this.vm.data[this.exp]; //强制执行监听器里的get函数
        Dep.target = null; //释放自己
        return value ;

    }
};