<?php
/**
 * Created by PhpStorm.
 * User: mischen
 * Date: 2018/6/28
 * Time: 9:54
 */

namespace app\admin\controller;
use app\index\model\Praise;
use app\index\model\Reply;
use app\index\model\Topic;
use app\index\model\User;
use think\Controller;

class Sum extends Controller
{
    public function count(){
        //统计信息
        $topic = Topic::all();
        $topic_sum = count($topic);
        $user = User::all();
        $user_sum = count($user);
        $reply = Reply::all();
        $reply_sum = count($reply);
        $praise = Praise::all();
        $praise_sum = count($praise);
        //结束信息
        $username = new User();
        $result = $username->DataCount();
        $this->assign([
            'topic_sum'=>$topic_sum,
            'user_sum'=>$user_sum,
            'reply_sum'=>$reply_sum,
            'praise_sum'=>$praise_sum,
            'publish_sum'=>$result,
        ]);
        return $this->fetch();
    }
}