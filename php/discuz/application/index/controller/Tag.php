<?php
/**
 * Created by PhpStorm.
 * User: mischen
 * Date: 2018/6/26
 * Time: 19:46
 */

namespace app\index\controller;
use think\Controller;
use app\index\model\Topic as TopicModel;
use app\index\model\User;
use app\index\model\Reply;



class Tag  extends Controller
{
    public function NewTagSort($id){
        $topic = new TopicModel();
        $list = $topic->TagSort($id);
        $pages = $list->render();
        $num = $list->count();
        $this->assign([
            'user'=>session('user'),
            'pages'=>$pages,
            'data'=>$list,
            'num'=>$num,
            'user_num'=>count(User::all()),
            'topic_num'=>count(TopicModel::all()),
            'reply_num'=>count(Reply::all()),
        ]);
        return $this->fetch('topic/tag');
    }
}