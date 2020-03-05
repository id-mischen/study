
//转换为虚拟DOM
function nodeToFragment(el) {
    let fragment = document.createDocumentFragment();
    let child = el.firstChild;
    while( child ){
        fragment.appendChild(child) ;
        child = el.firstChild ;
    }
    return fragment ;
}

function compileElement(el) {
    let childNodes = el.childNodes ;
    let that = this;
    [].slice.call(childNodes).forEach(function (node) {
        let reg = /\{\{(.*)\}\}/ ;
        let text = node.textContent ;
        if( that.isTextNode(node) && reg.text(text)){ //属于文本节点且 符合格式： {{ }}
            that.compileText(node, reg.exec(text)[1] );
        }
        if(node.childNodes && node.childNodes.length ){
            that.compileElement(node) ;//递归遍历
        }

    })
}

function compileText(node ,exp) {
    let that = this;
    let initText = this.vm[exp];
    updateText(node, initText) ; //将初始化的数据  到视图当中
    new Watcher(this.vm, exp, function (value) { //生成订阅器并绑定更新函数
        that.updateText(node, value)
    })
}
function updateText(node, value) {
    node.textContent = typeof value == 'undefined' ? '' :value ;
}
























