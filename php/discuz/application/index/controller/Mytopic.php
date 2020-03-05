<?php
/**
 * Created by PhpStorm.
 * User: mischen
 * Date: 2018/6/28
 * Time: 11:21
 */

namespace app\index\controller;
use app\index\model\Topic as TopicModel;
use app\index\model\User;
use app\index\model\Reply;


use think\Controller;

class Mytopic extends Controller
{
    public function Metopic(){
        $new = new TopicModel();
        $list = $new->MytopicModel();
        $pages = $list->render();
        $this->assign([
            'data'=>$list,
            'user'=>session('user'),
            'pages'=>$pages,
            'user_num'=>count(User::all()),
            'topic_num'=>count(TopicModel::all()),
            'reply_num'=>count(Reply::all()),
        ]);
        return $this->fetch('Topic/index');
    }

}