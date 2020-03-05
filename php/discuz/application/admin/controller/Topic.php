<?php
/**
 * Created by PhpStorm.
 * User: mischen
 * Date: 2018/6/27
 * Time: 20:24
 */

namespace app\admin\controller;
use think\Controller;
use app\index\model\Topic as TopicModel;


class Topic extends  Controller
{
    public function topicmanage(){
        $topic = new TopicModel();
        $list = $topic->Datacount();
        $pages = $list->render();
        $this->assign([
            'topicdata'=>$list,
            'pages'=>$pages,
        ]);
        return $this->fetch();
    }
    public function commentmanage(){
        $topic = new TopicModel();
        $list = $topic->Datacount();
        $pages = $list->render();
        $this->assign([
            'commentdata'=>$list,
            'pages'=>$pages,
        ]);
        return $this->fetch();
    }
    public function praisemanage(){
        $topic = new TopicModel();
        $list = $topic->Datacount();
        $pages = $list->render();
        $this->assign([
            'praisedata'=>$list,
            'pages'=>$pages,
        ]);
        return $this->fetch();
    }

}