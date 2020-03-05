
//添加订阅者
function Watcher(vm, expOrFn, cb) {
    console.log(expOrFn);
   this.cb = cb ;
   this.vm = vm;
   this.expOrFn = expOrFn;
   this.depIds = {} ;
   if(typeof expOrFn === "function"){ //判断该属性是否为函数
       this.getter = expOrFn ;
   }else{
       this.getter = this.parseGetter(expOrFn); //解析对象
   }
   this.value = this.get();

}
Watcher.prototype = {
    update:function(){
        let value = this.get();
        let oldVal = this.value ;
        if(value !== oldVal){
            this.value = value ;
            this.cb.call(this.vm, value, oldVal);
        }
    },
    addDep:function(dep){
        if(!this.depIds.hasOwnProperty(dep.id)){
            dep.addSub(this); //添加watcher
            this.depIds[dep.id] = dep ;
        }
    },
    get:function(){
        Dep.target = this ;
        let value = this.getter.call(this.vm, this.vm);
        Dep.target = null ;
        return value ;
    },
    parseGetter: function (exp) {
        if( /[^\w.$]/.test(exp)){
              return ;
          }
        let exps = exp.split(".");
        return function (obj) {
          for(let i = 0; i < exps.length; i++){
              if(!obj){
                  return
              }
              obj = obj[exps[i]] ; //寻找最后一个值
          }
          return obj ;
        }
    }
};