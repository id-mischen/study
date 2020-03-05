<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/5/28/028
 * Time: 9:58
 */

namespace app\index\model;
use think\Model;
use app\index\model\TopicTag;
class Tag extends Model
{
    public function TagNum(){
        return $this->withCount('topic_tag');
    }

}