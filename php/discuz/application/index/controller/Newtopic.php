<?php
/**
 * Created by PhpStorm.
 * User: mischen
 * Date: 2018/6/16
 * Time: 11:01
 */

namespace app\index\controller;
use think\Controller;
use app\index\model\Topic as TopicModel;
use app\index\model\User;
use app\index\model\Reply;

class Newtopic extends Controller
{

        //sort：排序，从低到高，键值重新分配。($arr)返回布尔型，成功true，rsort()相反
    public function NewAll($id){
        $new = new TopicModel();
        $list = $new->NewAllModel($id);
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