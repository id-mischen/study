
/**
 * 编译指令
 * @el #root
 * @vm MVVM
 * */
function Compile(el, vm) {
    this.$vm = vm ;
    /*真实DOM*/
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);
    if(this.$el){
        this.$fragment = this.nodeToFragment(this.$el);
        this.init() ;
        this.$el.appendChild(this.$fragment) ; //替换为 片段
    }
}
Compile.prototype = {
    isElementNode: function (node) {
      return node.nodeType === 1 ;
    },
    isTextNode: function(node){
       return node.nodeType === 3;
    },
    init:function () {
        this.compileElement(this.$fragment) ;
    },
    nodeToFragment: function (el) { //转化为虚拟DOM
        let fragment = document.createDocumentFragment(), child;
        while( child = el.firstChild){
            fragment.appendChild(child) ;
        }
        return fragment ;
    },
    compileElement: function (el) {
        let childNodes = el.childNodes ;
        let that = this ;
        [].slice.call(childNodes).forEach(function (node) {
            let text = node.textContent;  //文本
            let reg = /\{\{(.*)\}\}/ ;
            if(that.isElementNode(node)){
                that.compile(node) ;
            }else if(that.isTextNode(node) && reg.test(text)){
                that.compileText(node, RegExp.$1) ; //参数2: username
            }
            if(node.childNodes && node.childNodes.length){
                that.compileElement(node) ;//递归遍历所有子节点
            }


        })
    },
    compile: function (node) {
        let nodeAttrs = node.attributes;
        let that = this;
        [].slice.call(nodeAttrs).forEach(function (attr) {
           let attrName = attr.name ;
           if(that.isDirective(attrName)){
               let exp = attr.value;
               let dir = attrName.substring(2);
               //事件指令
               if(that.isEventDirective(dir)){

               }else{ //普通指令
                    compileUtil[dir] && compileUtil[dir](node, that.$vm, exp) ;
               }
               node.removeAttribute(attrName);

           }
        })

    },
    compileText: function (node ,exp) { //  exp 属性： username
        compileUtil.text(node, this.$vm, exp);
    },
    isDirective: function( attr ){
        return attr.indexOf('v-') === 0 ;
    },
    isEventDirective: function(dir){
        return dir.indexOf('on') === 0;
    },


};

//指令处理集合
let compileUtil = {
    //④重点 艹
    bind: function(node, vm, exp, dir){
        let updateFn = updater[dir + 'Updater'] ;
        updateFn && updateFn(node, this._getVMVal(vm, exp)); //exp 为绑定的名字 v-model = 'username' exp = username
        // new Watcher(vm, exp, function (value, oldValue) {
        //     updateFn && updateFn(node, value, oldValue) ;
        // })
    },
    text: function (node, vm, exp) {
        this.bind(node, vm, exp, 'text')
    },
    model:function(node, vm, exp){
        this.bind(node, vm, exp, 'model');
        let that = this,
            val = this._getVMVal(vm, exp) ;
        node.addEventListener('input',function (e) {
            let newVal = e.target.value;
            if( newVal === val){
                return
            }
            that._setVMVal(vm, exp, newVal);

        })
    },
    _getVMVal:function (vm, exp) {
        let val = vm;
        exp = exp.split('.') ;
        exp.forEach(function (k) {
            val = val[k]; //循环多次，找到最后的值
        });
        return val;
    },
    _setVMVal:function (vm, exp, value) {
        let val = vm ;
        exp = exp.split('.');
        exp.forEach(function (k, i) {
            //非最后一个key， 更新val的值
            if( i < exp.length - 1){
                val = val[k]
            } else {
                val[k] = value ;
            }
        })
    }
};

let updater = {
    textUpdater: function (node, value) {
        node.textContent = typeof value == "undefined" ? '' : value ;
    }
};










































