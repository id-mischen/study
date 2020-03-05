
function Compile(vm, el) {
    this.$vm = vm;
    this.$el = document.querySelector(el);
    this.$fragment = this.nodeToFragment(this.$el) ;
    this.init(); //初始化数据
    this.$el.appendChild(this.$fragment);

}
Compile.prototype = {
    nodeToFragment:function (node) {
        let fragment = document.createDocumentFragment(),
            child;
        while( child = node.firstChild){
            fragment.appendChild(child)
        }
        return fragment ;
    },
    init:function () {
        this.compileElement(this.$fragment)
    },
    compileElement: function (node) {
        let childNodes = node.childNodes;
        let that = this;
        [].slice.call(childNodes).forEach(function (node) {
            let text = node.textContent ;
            let reg = /\{\{(.*)\}\}/ ;
            if(node.nodeType === 1){ //元素节点
                that.compile(node);
            }else if(node.nodeType === 3 && reg.test(text)){ //文本节点 且格式为 {{ }}
                that.compileText(node, RegExp.$1) ;
            }
            if(node.childNodes && node.childNodes.length){
                that.compileElement(node); //遍历所有的子节点
            }
        })
    },
    compile:function (node) {
        let nodeAttrs = node.attributes;
        let that = this;
        [].slice.call(nodeAttrs).forEach(function (attr) {
            let attrName = attr.name ;
            if(attrName.indexOf("v-") === 0){ //判断是否为命令
               let dir = attrName.substring(2);
               let exp = attr.value;
               if(dir.indexOf('on') === 0){ //事件指令

               }else{//普通事件
                   compileUtil[dir] && compileUtil[dir](node, that.$vm, exp) ;
               }
               node.removeAttribute(attrName);

            }

        })
    },
    compileText:function (node, exp) {
        compileUtil.text(node, this.$vm, exp)
    }
};

//指令处理集合
let compileUtil = {
    bind: function (node, vm, exp, dir) {
        let updaterFn = updater[dir + 'Updater'];
        updaterFn && updaterFn(node, this._getVMVal(vm, exp));
        new Watcher(vm, exp, function (value, oldValue) {
            updaterFn && updaterFn(node, value, oldValue)
        });
    },
    _getVMVal:function(vm, exp){
        let val = vm;
        exp = exp.split('.') ;
        exp.forEach(function (k) {
            val = val[k];
        });
        return val ;
    },
    _setVMVal:function(vm, exp, value){
        let val = vm ;
        exp = exp.split(".");
        exp.forEach(function (k, i) {
            if(i < exp.length - 1){
                val = val[k] ;
            }else{
                val[k] = value ;
            }
        })
    },
    text:function (node, vm, exp) {
        this.bind(node, vm, exp, 'text')
    },
    model:function (node, vm, exp) {
        this.bind(node, vm, exp,'model');
        let that = this,
            val = this._getVMVal(vm, exp) ;
        node.addEventListener('input',function (e) {
            let newVal = e.target.value;
            if(newVal === val){
                return
            }
            that._setVMVal(vm, exp, newVal);
        })
    }
};

let updater = {
    textUpdater: function (node, value) {
        node.textContent = typeof value === "undefined" ? "" : value
    }
};



















