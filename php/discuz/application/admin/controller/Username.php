<?php
/**
 * Created by PhpStorm.
 * User: mischen
 * Date: 2018/6/27
 * Time: 19:59
 */

namespace app\admin\controller;
use app\index\model\Infor;
use app\index\model\User;
use think\Controller;
use app\index\model\Upload;

class Username extends  Controller
{
    public function name(){
            $user = User::all();
            $this->assign([
                'userdata'=>$user
            ]);
        return $this->fetch();
    }
    public function information(){
            $info = Infor::all();
            $this->assign([
                'information'=>$info,
            ]);
        return $this->fetch();
    }
}