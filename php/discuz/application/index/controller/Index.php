<?php
namespace app\index\controller;
use think\Controller;
use think\Validate;
use app\index\model\User;
use app\index\model\Infor as InforModel;
use app\index\model\Upload;

class Index extends Controller
{
    public function register(){
        //做验证器，验证需要使用validate类，需要在首页引进
        if(request()->isPost()){
            //要进行验证的数据，是表单数据
            $postdata = input('post.');//快速获取表单中的所有元素的方法
//            echo var_dump($postdata);
            $validate = new Validate([
                ["username","require|alphaNum|length:4,16","用户名不为空|用户名只能是字母加数字|长度在4-16之间"],
                ['email','require|email','email不为空|格式不对'],
                ['password','require|confirm:password_confirmation','密码不能为空|两次密码不一致'],
             ['verifycode','require|captcha','验证码不能为空|验证码不正确'],//验证码验证，
            ]);
            if(!$validate->check($postdata)){
                echo $validate->getError();
                $this->error('');;
            }
            //判断用户名是否重复
            $username = input('post.username');
            //根据字段查询
            $dbname = User::getByname($username);
            if($dbname){
                //默认跳转到本页面
                $this->error('用户名已存在');
            }
            $email = input('post.email');
            $dbemail = User::getByname($email);
            if($dbemail){
                $this->error('电子邮件已存在');
            }
            //下面对一些字段赋值
            //实例化对象
            $user = new User();
            $user->name = $username;
            $user->email = $email;
            $user->password = md5(input('post.password'));
            $user->avatar = 'images/avatar.jpg';
            $user->is_admin = 0;
            $user->is_delete = 0;
            $user->created_at = time();
            //保存
            if($user->save()){
                //当注册成功是，插入一个默认图片。
                Upload::create([
                    'user_id'=>$user->id,
                    'url'=>"20180620\default.jpg",
                ]);
                $this->success('注册成功','index/index/login');
            }else{
                $this->error('注册失败');
            }
        }
           return $this->fetch();
    }
    public function login(){
        //判断是否传过来表单信息
      if(request()->isPost()){
          //获取用户名.密码
          $login = input('post.login');
          $password  = md5(input('post.password'));//md5加密，恢复
          //实例化一个User对象
          $user = new User();
          //执行查询，查询条件是输入的用户名或email及密码与数据库作比较.两个where相当于and
          $rs1 = $user->where('name','=',$login)
                        ->where('password','=',$password)
                        ->find();
          //如果不匹配，下面和email作比较
          if(!$rs1){
              $rs1 = $user->where('email','=',$login)
                  ->where('password','=',$password)
                  ->find();
          }
          //判断目前是否匹配合法值，只要$rs1 里面有值，说明匹配成功。
          if($rs1){
              //为了实现在各个页面共享，使用session
              //登录成功,调用information，upload为了以后铺垫
              $information = InforModel::getByUserId($rs1->id);
              session('information',$information);
              $show_img = Upload::getByUserId($rs1->id);
              session('show_img',$show_img);
              session('user',$rs1);
              $this->success('登录成功','Topic/index');
          }else{
              $this->error('登录失败');
          }
      }
        //将信息给模板
        return $this->fetch('login');
    }
    public function logout(){
        //退出，session.对象时null，
       /* session('user',null);
        session('information',null);*/
        session(null);
        $this->success('成功退出','login');
    }



}
