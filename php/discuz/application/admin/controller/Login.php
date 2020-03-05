<?php

namespace app\admin\controller;
use think\Controller;
use app\index\model\User;
use think\Validate;

class Login extends Controller
{
    public function index(){
        if(request()->isPost()){
            //判断是否密码正确
            $admin = User::getByName(input('post.user'));
            $postdata = input('post.password');
            if($admin->password != $postdata){
                echo "密码错误，请重新登录";
                exit;
            }else{
                $this->success('登录成功','logindo/index');
            }



        }
        return $this->fetch();
    }
}