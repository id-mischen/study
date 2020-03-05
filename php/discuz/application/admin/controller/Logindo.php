<?php
/**
 * Created by PhpStorm.
 * User: mischen
 * Date: 2018/6/27
 * Time: 16:01
 */

namespace app\admin\controller;
use think\Controller;


class Logindo extends Controller
{
    public function index(){
        return $this->fetch();
    }
    public function header(){
        return $this->fetch();
    }
    public function main(){
        return $this->fetch();
    }
    public function menu(){
        return $this->fetch();
    }

}