
//添加订阅者，更新视图
function Watcher( vm, expOrFn, cb) {
    this.cb = cb;
    this.vm = vm;
    this.expOrFn = expOrFn;
    this.depIds = {} ;
    if( typeof expOrFn === 'function'){
        this.getter = expOrFn ;
    }else{
        this.getter = this.parseGetter(expOrFn); //闭包 返回一个函数
    }
    this.value = this.get() ;
}
Watcher.prototype = {
    update: function () {
        let value = this.get() ;
        let oldVal = this.value ;
        if(value !== oldVal){
            this.value = value;
            this.cb.call(this.vm, value, oldVal)
        }
    },
    get: function(){
        Dep.target = this ;
        let value = this.getter.call(this.vm, this.vm);
        Dep.target = null;
        return value ;
    },
    addDep: function (dep) { //dep 代表消息订阅器
        if(!this.depIds.hasOwnProperty(dep.id)){ //判断是否存在
            dep.addSub(this); //添加watcher  订阅者
            this.depIds[dep.id] = dep ;
        }
    },
    parseGetter: function (exp) {
        if( /[^\w.$]/.test(exp)){ //匹配正确字符
            return ;
        }
        let exps = exp.split('.') ;
        return function (obj) {
            for(let i = 0 ; i < exps.length; i++){
                if(!obj){
                    return
                }
                obj = obj[exps[i]]; //找到最后一个值
            }
            return obj ;
        }
    }
};