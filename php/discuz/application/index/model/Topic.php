<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/5/28/028
 * Time: 9:57
 */

namespace app\index\model;
use think\Model;


class Topic extends Model
{
    public function Tag(){
            //关联总的表名必须为全路径！！
            return $this->belongsToMany('tag','topic_tag','tag_id','topic_id');
        }
    public function Praise(){
        return $this->hasMany('Praise','topic_id','id');
    }
    public function User(){
        return $this->belongsTo('User');
    }
    public function Reply(){
        return $this->hasMany('Reply','topic_id','id');
    }
    public function Datacount(){
        //包含多个表。点赞、评论等
        return $this->withCount('Reply')->withCount('Praise')->with('Tag,Praise,User,Reply')->paginate(6,false);
        //分页，简单，快速。
        //$topic->user->name  :用户的名
    }
    public function getTopicById($id){
        return $this->withCount('Reply')->withCount('Praise')->with('Tag,Praise,User,Reply')->find($id);

    }
    public function search($keyWord){
        $cond = [];
        $cond['title']= ['like','%'.$keyWord.'%'];
        //where('title','like','%like%')
        return $this->withCount('Reply')
            ->withCount('Praise')
            ->with('Tag,Praise,User,Reply')
            ->where($cond)
            ->paginate(10);
    }

            //新生成的reply_count，praise_count(小写)可以进行排序，因为在topic中
            //总结：order中desc和 asc可以同时使用，支持多个条件，但必须在引号内才能解析
    //数组条件的话，必须以数组键值的方式（索引方式）
    //()的话，在引号里，不可使用键值。
    public function NewAllModel($id){
        switch($id){
            case 1:
                $cond = ['id'=>'desc'];
                break;
            case 2:
                $cond = ['praise_count'=>'desc','reply_count'=>'desc'];
                break;
            case 3:
                $cond = ['praise_count'=>'desc'];
                break;
            case 4:
                $cond = ['reply_count'=>'asc'];
                break;
            default:
                $cond [] = [''];
        }
        return $this->with('Tag,Praise,User,Reply')
            ->withCount('Reply')
            ->withCount('Praise')
            ->order($cond)
            ->paginate(10);
    }
    public function TagSort($id){
       switch($id){
            case 0:
                $cond  = 0 ;
                $cond2 = 8;
                break;
           case 1:
               $cond = 0;
               $cond2 = 4;
                   break;
           case 2 :
               $cond = 3;
               $cond2 = 6;
                   break;
           case 3:
               $cond = 5;
               $cond2 = 8;
                    break;
            default;
                    $cond [] = [''];
        }
        return $this->with('Tag,Praise,User,Reply')
            ->withCount('Reply')
            ->withCount('Praise')
            ->where('category_id','>',$cond)
            ->where('category_id','<',$cond2)
            ->paginate(10);
    }
    public function MytopicModel(){
        return $this->with('Tag,Praise,User,Reply')
            ->withCount('Reply')
            ->withCount('Praise')
            ->where('user_id',session('user.id'))
            ->paginate(10);
    }


}