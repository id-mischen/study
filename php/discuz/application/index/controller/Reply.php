<?php
/**
 * Created by PhpStorm.
 * User: mischen
 * Date: 2018/6/11
 * Time: 10:59
 */

namespace app\index\controller;
use think\Controller;
use app\index\model\Reply as ReplyModel;
use think\Validate;

class Reply extends  Controller
{
    public function newReply(){
        if(request()->isPost()){
            //验证器
            $postData = input('post.');
            $validate = new Validate([
                ['content','require','评论内容不能为空']
            ]);
            if(!$validate->check($postData)){
                echo $validate->getError();
                $this->error('');
            }
            $insert = ReplyModel::create([
                'content'=>input('post.content'),
                'reply_id'=>1,
                'topic_id'=>input('post.topic_id'),
                'created_at'=>time(),
                'user_id'=>session('user.id'),
            ]);
            if($insert){
                echo "评论成功";
            }else{
                echo "评论失败";
            }

        }
    }
}