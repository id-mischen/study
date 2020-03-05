<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/5/24/024
 * Time: 15:35
 */

namespace app\index\controller;
use think\Controller;
use think\Validate;
use app\index\model\Topic as TopicModel;
use app\index\model\User;
use app\index\model\Tag;
use app\index\model\Praise;
use app\index\model\Reply;

class Topic extends Controller
{
    public function index(){
        //查询成员信息
        //调用多个表，用关联预载入with
       $topic = new TopicModel();
       $list = $topic->Datacount();
        $pages = $list->render();
        // echo $value->user->id  echo $value['name]
        $this->assign([
            'data'=>$list,
            'user'=>session('user'),
            'pages'=>$pages,
            'user_num'=>count(User::all()),
            'topic_num'=>count(TopicModel::all()),
            'reply_num'=>count(Reply::all()),
        ]);
        return $this->fetch();
    }
    public function Search(){
        $keyword = input('post.keyword');
        //实例化topic模型，调用search
        $topic = new TopicModel();
        $list = $topic->search($keyword);
        $pages = $list->render();
        //分配数据,且与index方法一样。
        $this->assign([
            'data'=>$list,
            'user'=>session('user'),
            'pages'=>$pages,
            'user_num'=>count(User::all()),
            'topic_num'=>count(TopicModel::all()),
            'reply_num'=>count(Reply::all()),
        ]);
        //页面转换，相对于view层,view开始
        return $this->fetch('topic/index');
    }
    public function Praise($id){
        //判断用户是否登录
        if(empty(session('user'))){
            echo "<script>alert('请登录，再点赞');history.back(-1)</script>";
            exit;
        }
        //判断用户是否点赞
        $praise = new Praise();
        $rs =  $praise->where(['user_id'=>session('user.id'),'topic_id'=>$id])->find();
        if(empty($rs)){
            //没点赞时
            $insert_praise = Praise::create([
                'user_id'=>session('user.id'),
                'topic_id'=>$id,
                'created_at'=>time(),
            ]);
            if($insert_praise){
                echo "<script>alert('点赞成功');history.back(-1)</script>";
            }else{
                echo "点赞失败";
            }
        }else{
            //已经点赞了
            echo "<script>alert('您已经点赞，务须再点');history.back(-1)</script>";
        }

    }




    public function newpost(){
        //传递session
        $this->assign('user',session('user'));
        //验证器
        if(request()->isPost()){
            //Ϊnull
            $postData = input('post.');
            $validate = new Validate([
                ["title","require","标题不为空"],
                ["node","require","节点不为空"],
                ["content","require","内容不为空"],
                ["tag","require","标签不为空"]
            ]);
            $validate->check($postData);
            if (!$validate->check($postData)){
                echo $validate->getError();
                $this->error('');
            }
            //data-insert-start
            $topic = new TopicModel();
            $topic->title = input('post.title');
            $topic->content = input('post.content');
            $topic->user_id = session('user')['id'];
            $topic->is_delete = 0;
            $topic->created_at = time();
            $topic->category_id = input('post.node');
            if($topic->save()){

                //分割标签
                $tags = explode(',',input('post.tag'));
               foreach($tags as $value){
                    //存在标签，topic_tag,
                    if($tagsall = Tag::getByname($value)){
                        $topic_tag = TopicModel::get($topic->id);
                        $topic_tag->Tag()->save([$tagsall['id']]);
                    }else{
                        //不存在标签，tapic_tag
                        $topic = TopicModel::get($topic->id);
                        $topic->Tag()->save([
                            'name'=>$value,
                        ]);
                    }
                   echo "<script>alert('发表成功');history.back(-1);</script>";
                }
            }else{
                echo "Failure";
            }
            //data-insert -end!
        }
        $this->assign('category',config('category'));
        return $this->fetch();
    }
    public function detail($id){
        $topic = new TopicModel();
        $topics = $topic->getTopicById($id);

        $this->assign([
            'data'=>$topics,
            'user'=>session('user'),
        ]);
        return $this->fetch();
    }



}
