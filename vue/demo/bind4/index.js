
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

// function Compile(el, Vue) {
//     this.$vm = Vue ;
//     this.$el =  this.isElementNode(el) ? el : document.querySelector(el);;
//     this.$fragment = this.nodeToFragment(this.$el) ;
//     this.compileElement() ;
//     this.$el.appendChild(this.$fragment) ; //替换为 片段
//
// }
// Compile.prototype = {
//     isElementNode: function (node) {
//         return node.nodeType === 1 ;
//     },
//     isTextNode: function(node){
//         return node.nodeType === 3;
//     },
//     init:function () {
//         this.compileElement(this.$fragment) ;
//     },
//     nodeToFragment: function (el) { //转化为虚拟DOM
//         let fragment = document.createDocumentFragment(), child;
//         while( child = el.firstChild){
//             fragment.appendChild(child) ;
//         }
//         return fragment ;
//     },
//     /* 转化为虚拟DOM */
//     // nodeToFragment: function (dom) {
//     //     let fragment = document.createDocumentFragment() ,
//     //         child ;
//     //     while( child = dom.firstChild){
//     //         fragment.appendChild(child) ;
//     //     }
//     //     return fragment ;
//     // },
//     /* model - view */
//     compileElement: function (el = this.$fragment) {
//         let childNodes = el.childNodes ;
//         let that = this ;
//         [].slice.call(childNodes).forEach(function (node) {
//             let text = node.textContent;  //文本
//             let reg = /\{\{(.*)\}\}/ ;
//             if(that.isElementNode(node)){
//                 that.compile(node) ;
//             }else if(that.isTextNode(node) && reg.test(text)){
//                 that.compileText(node, RegExp.$1) ; //参数2: username
//             }
//             if(node.childNodes && node.childNodes.length){
//                 that.compileElement(node) ;//递归遍历所有子节点
//             }
//
//
//         })
//     },
//     compile: function (node) {
//         let nodeAttrs = node.attributes;
//         let that = this;
//         [].slice.call(nodeAttrs).forEach(function (attr) {
//             let attrName = attr.name ;
//             if(that.isDirective(attrName)){
//                 let exp = attr.value;
//                 let dir = attrName.substring(2);
//                 //事件指令
//                 if(that.isEventDirective(dir)){
//
//                 }else{ //普通指令
//                     compileUtil[dir] && compileUtil[dir](node, that.$vm, exp) ;
//                 }
//                 node.removeAttribute(attrName);
//
//             }
//         })
//
//     },
//     compileText: function (node ,exp) { //  exp 属性： username
//         compileUtil.text(node, this.$vm, exp);
//     },
//     isDirective: function( attr ){
//         return attr.indexOf('v-') === 0 ;
//     },
//     isEventDirective: function(dir){
//         return dir.indexOf('on') === 0;
//     },
//
//
// };
//
// /*let compileUtil = {
//     bind: function (node, vm, exp, dir) {
//         let updateFn = updater[dir + 'Updater'] ;
//             updateFn && updateFn(node, this._getVMVal(vm, exp));
//     },
//     text: function (node, vm, exp) {
//         this.bind(node, vm,exp, 'text') ;
//     },
//     _getVMVal:function (vm, exp) {
//         let val = vm;
//         exp = exp.split('.') ;
//         exp.forEach(function (k) {
//             val = val[k]; //循环多次，找到最后的值
//         });
//         return val;
//     },
// };
//
// let updater = {
//     textUpdater: function (node, exp) {
//         node.textContent = typeof value == "undefined" ? '' : value ;
//         console.log(node, exp) ;
//     }
// };*/
// //指令处理集合
// let compileUtil = {
//     //④重点 艹
//     bind: function(node, vm, exp, dir){
//         let updateFn = updater[dir + 'Updater'] ;
//         updateFn && updateFn(node, this._getVMVal(vm, exp)); //exp 为绑定的名字 v-model = 'username' exp = username
//         // new Watcher(vm, exp, function (value, oldValue) {
//         //     updateFn && updateFn(node, value, oldValue) ;
//         // })
//     },
//     text: function (node, vm, exp) {
//         this.bind(node, vm, exp, 'text')
//     },
//     model:function(node, vm, exp){
//         this.bind(node, vm, exp, 'model');
//         let that = this,
//             val = this._getVMVal(vm, exp) ;
//         node.addEventListener('input',function (e) {
//             let newVal = e.target.value;
//             if( newVal === val){
//                 return
//             }
//             that._setVMVal(vm, exp, newVal);
//
//         })
//     },
//     _getVMVal:function (vm, exp) {
//         let val = vm;
//         exp = exp.split('.') ;
//         exp.forEach(function (k) {
//             val = val[k]; //循环多次，找到最后的值
//         });
//         return val;
//     },
//     _setVMVal:function (vm, exp, value) {
//         let val = vm ;
//         exp = exp.split('.');
//         exp.forEach(function (k, i) {
//             //非最后一个key， 更新val的值
//             if( i < exp.length - 1){
//                 val = val[k]
//             } else {
//                 val[k] = value ;
//             }
//         })
//     }
// };
//
// let updater = {
//     textUpdater: function (node, value) {
//         node.textContent = typeof value == "undefined" ? '' : value ;
//     }
// };


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




























































