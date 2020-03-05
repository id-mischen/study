<?php
namespace app\index\controller;
use think\Controller;
use  app\index\model\UserAccount ;

class Index extends Controller
{
    public function register(){

    }
    public function login(){
//        $username = UserAccount::get(2);
//        $userInfo = UserAccount::where('username','rainy')->select();

//        $userInfo = UserAccount::where('id','>','4')->limit(1)->order('id','desc')->select();
//        $userInfo = UserAccount::all();

        UserAccount::chunk('0',function ($userInfo){
           foreach ($userInfo as $key => $user ){
               echo $user."<br>";
           }
        });
        return $this->fetch();
    }
}
