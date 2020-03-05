
import axios from 'axios' ;
import  qs from 'qs' ;  //序列化请求参数

/**
 * 请求拦截
 * */
axios.interceptors.request.use( config  =>{
    let token = sessionStorage.getItem('token') ;
    if(token){
        config.headers.Authorization = `Bearer ${token}` ;
    }
    return config
},  error => {
    return Promise.reject(error)
}) ;
/**
 * 响应拦截
 * */
axios.interceptors.response.use((res) =>{
    if(res.data.status_code !== 0){
        // 返回错误
    }
    return res
}, (error) => {
    return Promise.reject(error)
});

/**
 * 检验网络状态码
 * @param res
 * */
function checkStatus(res){
    if( res && ( res.status === 200 || res.status === 304 || res.status === 400)){
        return res
    }
    return {
        status: -404,
        msg: '网络异常'
    }
}
/**
 * 检验返回状态码
 * */
function checkCode(res){
    if(res.data.status_code !== 0){
        alert(res.data.message) ;
    }
    return res
}

export default {
    post(url, data) {
        return axios({
            method: 'post',
            url,
            withCredentials: false,  //表示跨域请求时是否需要使用凭证
            data: qs.stringify(data),
            timeout: 10000
        }).then((res) =>{
            return checkStatus(res) ;
        }).then( (res) => {
            return checkCode(res) ;
        })
    },
    get(url, params){
        return axios({
            method: 'get',
            url,
            params,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            timeout: 3000,
        }).then((res)=>{
            return checkStatus(res) ;
        }).then(res => checkCode(res)) ;
    }
}
