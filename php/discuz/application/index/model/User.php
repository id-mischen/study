<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/5/28/028
 * Time: 9:59
 */

namespace app\index\model;
use think\Model;

class User extends Model
{
    public  function Reply(){
        return $this->hasMany('reply','user_id','id');
    }
    public function Topic(){
        return $this->hasMany('topic','user_id','id');
    }
    public function DataCount(){
        return $this->withCount('Topic')->select();
    }
}