<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/5/28/028
 * Time: 9:59
 */

namespace app\index\model;
use think\Model;

class Reply extends Model
{
    public function User(){
        return $this->belongsTo('User','user_id');
    }
}