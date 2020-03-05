<?php
/**
 * Created by PhpStorm.
 * User: mischen
 * Date: 2018/6/28
 * Time: 13:10
 */

namespace app\index\controller;
use think\Controller;

class Myinform extends Controller
{
    public function Meinform(){
        $this->assign([
            'user'=>session('user.id'),
        ]);
        return $this->fetch('Myinform/message');
    }
    public function Meintegrl(){
        $this->assign([
            'user'=>session('user.id'),
        ]);
        return $this->fetch('Myinform/score');
    }
}