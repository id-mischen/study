<?php


/*function show($b){
    static $x = 0;
    echo $x,'----',$b;
    $x++;
}

show(2);
show(3);
show(4);*/

class Car{
    var $color;
    function __construct( $color = red)
    {
        $this->color = $color;
    }
    function what_color(){
        return $this->color;
    }
}

//$show = new Car("gold");
//var_dump($show);
//
//define("username","mischen",true);
//echo USERNAME;
////echo strlen("hello world");
//echo strpos("hello world","world");
//$cars = array("name"=>"mischen","age"=>18);
//var_dump($cars);
//foreach ($cars as $key=>$value){
//    echo $key."----".$value;
//    echo "</br>";
//}
//echo '该文件位于 " '  . __FILE__ . ' " ';
//echo '该文件位于 " '  . __DIR__ . ' " ';
class Site {
    /* 成员变量 */
    var $name;
    var $age;
    function __construct($name, $age)
    {
        $this->name = $name ;
        $this->age = $age ;
    }
    function showName()
    {
        echo "我的名字是：".$this->name ;
    }
    function __destruct()
    {
        echo "销毁".$this->name ;
    }


}

class Son extends Site{
    var $sex;
    function setSex($sex)
    {
        $this->sex = $sex ;
    }
    function showName()
    {
        echo "My name is ".$this->name ;
    }

}

//$show = new Son('mischen','20');
//$show->sex = 'man' ;
//$show->showName() ;
//
//var_dump($show);
class MyClass {
    public $public = 'Public' ;
    protected $protected = 'Protected';
    private $private = 'Private';

    function showHello(){
        echo $this->public;
        echo $this->protected;
        echo $this->private;
    }
}
//$show = new MyClass();
//$show->public = 'mischen';
//
//var_dump($show);

interface iTemplate{
    public function setUserInfo($name , $age);
    public function getUserInfo();
}
class Test implements iTemplate{
    var $name;
    var $age;
    public function setUserInfo($name, $age)
    {
       $this->name = $name;
       $this->age = $age;
    }
    public function getUserInfo()
    {
        echo "我的名字:".$this->name."我的年龄：".$this->age ;
    }
}

//$show = new Test();
//$show->name = "mischen" ;
//$show->age = 19;
//$show->getUserInfo();

abstract class AbstractClass{
    abstract protected function getValue();
    abstract protected function prefixValue($prefix);

    // 普通方法（非抽象方法）
    public function printOut() {
        print $this->getValue() . PHP_EOL;
    }
}
class ConcreteClass1 extends AbstractClass
{
    protected function getValue() {
        return "ConcreteClass1";
    }

    public function prefixValue($prefix) {
        return "{$prefix}ConcreteClass1";
    }
}

class ConcreteClass2 extends AbstractClass
{
    public function getValue() {
        return "ConcreteClass2";
    }

    public function prefixValue($prefix) {
        return "{$prefix}ConcreteClass2";
    }
}

//$class1 = new ConcreteClass1;
//$class1->printOut();
//echo $class1->prefixValue('FOO_') . PHP_EOL;

//$class2 = new ConcreteClass2;
//$class2->printOut();
//echo $class2->prefixValue('FOO_') . PHP_EOL;

abstract class Grand{
    abstract protected function setName($name);

    public function showName($name,$age){
        echo "我的名字:".$name.$age ;
    }
}
class UserInfo extends Grand{
    var $name ;
    var $age ;
    public function setName($name, $age = 19)
    {
        $this->name = $name;
        $this->age = $age;
    }
}

$test = new UserInfo();
$test->setName('mischen');

abstract class AbstractClassB
{
    // 我们的抽象方法仅需要定义需要的参数
    abstract protected function prefixName($name);

}

class ConcreteClass extends AbstractClassB
{

    // 我们的子类可以定义父类签名中不存在的可选参数
    public function prefixName($name, $separator = ".") {
        if ($name == "Pacman") {
            $prefix = "Mr";
        } elseif ($name == "Pacwoman") {
            $prefix = "Mrs";
        } else {
            $prefix = "";
        }
        return "{$prefix}{$separator} {$name}";
    }
}

//$class = new ConcreteClass;
//echo $class->prefixName("Pacman"), "\n";
//echo $class->prefixName("Pacwoman"), "\n";

class Foot{
    public static $name = 'mischen' ;
    public function showShow(){
        echo "我被调用了".self::$name;
        return self::$name ;
    }
}

//$show = new Foot();
//echo Foot::$name ;
//$c = $show->showShow();
//echo $c ;

class BaseClass{
    function __construct()
    {
        echo "我是BaseClass类中的方法" ;
    }
}

class SubClass extends BaseClass{
    function __construct()
    {
        parent::__construct() ;
        echo "SubClass类中的方法";
    }
}

class Other extends BaseClass{

}
$show = new Other()

;

//$array = [1,2,3,4] ;
//foreach ($array as $keys => $value){
////    echo $value ;
//    echo $keys;
//}

$myArray = array("name"=>"val1","2"=>"val2","3"=>"val3");

foreach ($myArray as $key => $value){
    echo $key ;
    echo $value;
}










