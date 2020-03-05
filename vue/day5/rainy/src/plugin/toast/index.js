
import Toast from  './toast'

export  default {
    /**
     * @Vue Vue vue实例
     * @config options配置，对应Vue.use(xx, options)
     * */
    install(Vue, config){
        Vue.prototype.$toast = function (msg, oC) {
            console.log(msg) ;
            console.log(oC) ;
            let ToastConstructor = Vue.extend(Toast) ,
                dom = document.createElement('div');
            //挂载视图
            let vm = new ToastConstructor().$mount(dom) ;
                console.log(vm) ;
                vm.message = msg ;
            document.body.appendChild(vm.$el) ;
            oC.appendChild(vm.$el) ;
        }
    }
}