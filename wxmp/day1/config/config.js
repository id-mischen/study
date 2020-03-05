
// const TEST_BASE_URL = 'http://dev.smile.test/' ; //内部测试地址   

// const TEST_BASE_URL = 'https://shcapidev.shihaoo.com/'; //线上测试地址

const TEST_BASE_URL = 'https://shcapi.shihaoo.com/'; //正式地址

let API = {
    login: TEST_BASE_URL + 'api/v1/wx/applet/login',            //授权登录
    code_send: TEST_BASE_URL + 'api/v1/sms/code',               //验证码 -- 发送
    code_validate: TEST_BASE_URL + 'api/v1/wx/applet/register',  //验证码 -- 验证注册

    shop_index: TEST_BASE_URL + 'api/v6/mall/index',             //商城首页
    shop_index_do: TEST_BASE_URL + 'api/v5/business/index',        //机构首页

    shop_coupon: TEST_BASE_URL + 'api/v2/business/activityCoupons', //商家平台优惠卷列表
    shop_coupon_user: TEST_BASE_URL + 'api/v2/coupon/list',         //用户优惠卷
    shop_coupon_draw: TEST_BASE_URL + 'api/v2/coupon/add',          //领取优惠卷
    shop_coupon_red_paper: TEST_BASE_URL + 'api/v2/coupon/addRedPacket', //领取红包
    shop_coupon_choose: TEST_BASE_URL + 'api/v2/coupon/orderList',   //可用或不可用优惠卷

    shop_category_goods: TEST_BASE_URL + 'api/v2/business/categoryGoods?page=',   //所有机构（该分类）的商品
    shop_category_first: TEST_BASE_URL + 'api/v2/business/categoryFirstGoods?page=',    //所有机构该分类销量最高的商品
    shop_category_six: TEST_BASE_URL + 'api/v2/business/categorySixGoods',      //所有机构该分类销量最高的六商品
    supplier_good_list: TEST_BASE_URL + 'api/v6/supplier/goods/list',           //供应商分类商品列表
    follow_good_list: TEST_BASE_URL + 'api/v6/user/follow/goods/list', //商品关注列表

    coupon_cash_list: TEST_BASE_URL + 'api/v4/bed/order/coupons',         //优惠卷(床位) - 返现列表
    pay_money_bed: TEST_BASE_URL + 'api/v4/user/bed/order/list',          //床位缴费信息 - 列表

    good_add_cart: TEST_BASE_URL + 'api/v5/cart/add',       //加入购物车
    good_list_cart: TEST_BASE_URL + 'api/v5/cart/list',     //购物车列表
    good_delete_cart: TEST_BASE_URL + 'api/v2/cart/delete', //删除购物车商品
    good_change_cart: TEST_BASE_URL + 'api/v2/cart/changenum',   //增减商品数量
    good_buy_cart: TEST_BASE_URL + 'api/v6/order/pay/cart/page',    //购物车下单(页面)
    good_buy_direct: TEST_BASE_URL + 'api/v6/order/pay/page',       //直接购买（页面）
    good_settlement: TEST_BASE_URL + 'api/v6/applet/create/order',   //结算（商品）
    bed_settlement: TEST_BASE_URL + 'api/v4/bed/order/applet/create',      //结算（床位费）
    pay_success: TEST_BASE_URL + 'api/v6/order/pay/successful/info',       //支付成功后

    business_search: TEST_BASE_URL + 'api/v1/business/search?page=',        //机构搜索
    business_want_search: TEST_BASE_URL + 'api/v2/business/businessSearch', //机构搜索联想
    business_org: TEST_BASE_URL + 'api/v1/business/org',                  //机构首页
    goods_id: TEST_BASE_URL + 'api/v6/goods/detail',                        //商品详情
    goods_follow: TEST_BASE_URL + 'api/v6/goods/follow',                    //商品关注                                  
    comment_list: TEST_BASE_URL + 'api/v1/business/goods/comments?page=',       //评价列表
    goods_search: TEST_BASE_URL + 'api/v1/business/goods/search?page=',   //商品搜索
    user_info: TEST_BASE_URL + 'api/v6/user/info',                             //用户资料
    band_list: TEST_BASE_URL + 'api/v1/elder/bind/list',                 //老人列表
    band_old: TEST_BASE_URL + 'api/v2/users/apply',                 //老人绑定 
    band_state: TEST_BASE_URL + 'api/v1/elder/bind/show',              //老人绑定详情

    mec_list: TEST_BASE_URL + 'api/v1/business/follow/list',             //机构关注列表  0
    mec_list_band: TEST_BASE_URL + 'api/v2/business/bindList',           //机构绑定列表  0
    mec_follow: TEST_BASE_URL + 'api/v1/business/follow',             //机构关注或取消  0

    order_list: TEST_BASE_URL + 'api/v5/order/list',              //订单列表
    order_detail: TEST_BASE_URL + 'api/v6/order/detail',            //订单详情
    order_eval: TEST_BASE_URL + 'api/v5/order/comment/create',            //订单评价
    order_sure: TEST_BASE_URL + 'api/v1/payment/order/confirm',            //订单确认
    order_commit: TEST_BASE_URL + 'api/v2/order/cart_pay_page',             //订单提交
    order_cancel: TEST_BASE_URL + 'api/v1/payment/order/cancel',           //订单取消
    order_delete: TEST_BASE_URL + 'api/v2/order/remove',                    //订单删除

    order_refund_direct: TEST_BASE_URL + 'api/v5/order/direct/cancel',     //直接取消订单（商家未接单）
    order_refund_servicing: TEST_BASE_URL + 'api/v5/order/apply/cancel',  //服务中取消订单 


    upload_img: TEST_BASE_URL + 'api/v1/image/upload',                     //图片上传
    pay_ment: TEST_BASE_URL + 'api/v1/payment/order',                     //支付接口
    pay_wait_ment: TEST_BASE_URL + 'api/v6/applet/order/pay/again',     //待付款

    refund_list: TEST_BASE_URL + 'api/v2/refund/list?page=',                     //售后订单列表
    refund_show: TEST_BASE_URL + 'api/v2/refund/show',                     //退款详情
    refund_apply_list: TEST_BASE_URL + 'api/v2/refund/apply_list?page=',         //申请售后列表
    refund_page: TEST_BASE_URL + 'api/v6/refund/apply',                     //申请售后页面
    refund_create: TEST_BASE_URL + 'api/v2/refund/create',                 //申请退款
    refund_revoke: TEST_BASE_URL + 'api/v2/refund/cancle',                 //撤销申请


    address_list: TEST_BASE_URL + 'api/v6/user/address/all/list',         //地址列表
    address_add: TEST_BASE_URL + 'api/v1/address/add',                  //地址新增(老人)
    address_add_user: TEST_BASE_URL + 'api/v6/user/receiving/address/create', //地址新增（用户）
    address_edit: TEST_BASE_URL + 'api/v1/address/edit',                 //地址更新
    address_edit_user: TEST_BASE_URL + 'api/v6/user/receiving/address/edit',     //地址更新 （用户）
    address_delete: TEST_BASE_URL + 'api/v1/address/remove',               //地址删除 未绑定
    address_delete_user: TEST_BASE_URL + 'api/v6/user/receiving/address/delete',             //地址删除 用户

    message_list: TEST_BASE_URL + 'api/v1/message/list',                   //消息列表
    message_read: TEST_BASE_URL + 'api/v1/message/read',                  //消息已读

    opinion: TEST_BASE_URL + 'api/v1/app/feedback',                         //意见反馈  

    jg_init: TEST_BASE_URL + 'api/v2/users/sign',                           //极光初始化

    bed_rule: TEST_BASE_URL + "api/v4/bed/activity/rule",                          //床位费活动规则

    recharge_type: TEST_BASE_URL + 'api/v6/vip/renew/choice',               //充值类型列表
    pension_list: TEST_BASE_URL + 'api/v6/user/pension/list',               //养老金列表
    vip_recharge: TEST_BASE_URL + 'api/v6/vip/renew/applet/create/order',   //充值会员




}

module.exports = API;
