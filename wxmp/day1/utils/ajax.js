const util = require("./sha1.js")
const REQUEST_CACHE = [];

/**
 * 简单请求封装
 * url: 请求地址
 * data: 请求内容
 * method: 请求方法
 * cache: 缓存时长(单位: 秒)
 */
function FetchRequest(url, data, method = 'POST', cache = 0, header = { os: 3 }) {

    return new Promise(Request);

    /**
     * 请求接口
     */
    function Request(resolve, reject) {

        let _data = {},
            sign = '',
            allData = {},
            token = wx.getStorageSync('token') || '',
            timestamp = Date.parse(new Date()).toString().substring(0, 10);

        //判断token是否存在，形成不同数据
        if (token == '') {
            _data = { ...data, timestamp: timestamp };
        } else {
            _data = { ...data, timestamp: timestamp, token: token }
        }
        //数据按照自然排序，形成签名
        sign = util.sha1(decodeURIComponent(DataSort(_data)));

        //判断token是否存在，形成不同数据，必须在这 ---  等待sign 算完
        if (token == '') {
            allData = { ..._data, sign: sign };
        } else {
            allData = { ..._data, sign: sign, token: token }
        }

        wx.request({
            url: url,
            method: method.toUpperCase(),
            data: allData,
            header: header,
            success: FetchSuccess,
            fail: FetchError,
        })

        /**
         * 成功回调
         */
        function FetchSuccess(res) {
            if (res.statusCode >= 200 && res.statusCode < 300) {
                if (res.data.status_code == 1000 || res.data.status_code == 2000) {
                    wx.removeStorageSync('token');
                    wx.showToast({
                        title: '登录状态已失效',
                        icon: 'none'
                    })
                    wx.clearStorageSync();
                    setTimeout(function () {
                        wx.navigateTo({
                            url: '/pages/login/login',
                        })
                    }, 1000)
                }
                if (res.data.status_code != 0) {
                    wx.showToast({
                        title: res.data.message,
                        icon: 'none'
                    })
                }
                resolve(res);
            } else {
                FetchError(res.data);
                switch (res.statusCode) {
                    case 403:
                        // 业务逻辑处理
                        break
                }
            }
        }
        /**
         * 异常处里
         */
        function FetchError(err) {
            if (err) {
                wx.showToast({
                    title: err.errMsg || err.message,
                    icon: 'none',
                    duration: 3000
                })
            }
            reject(err);
        }
    }

    /**
     * 数据的重新排序拼接
     */
    function DataSort(data) {
        let newKey = Object.keys(data).sort();
        let newData = {};
        let str = '';
        for (let i = 0; i < newKey.length; i++) {
            newData[newKey[i]] = data[newKey[i]]; //赋予新对象
        }
        Object.keys(newData).map((key) => { //按照自然语言进行排序拼接
            str += `${key}=${newData[key]}&`;
        })
        return str.substring(0, str.length - 1);
    }


}

module.exports = {
    fetchRequest: FetchRequest,
}