import 'show.dart';

//主函数
void main(){
//    var person = new Person("Rainy", 18, '未婚') ;
//        print(person.userInfo) ;
//
//        var show = new Person.withName(19) ;

    var test = new Son("程序员") ;
        test.work() ;


}

class Person{
    String name;
    int age;
    String _marry;
    /* 构造方法 */
    Person(this.name, age, marry){
        this.age = age ;
        this._marry = marry ;
    }
    Person.withName(this.age){

    }
    String get userInfo => "$name: $age - $_marry" ;
//    void inputInfo(){
//        print("$name: $age - $_marry") ;
//    }
}

class Son extends Father{
  Son(String jop) : super(jop);

  @override
  void work() {
    // TODO: implement work
    super.work(); //调用父类方法
    print("work, 儿子追加的方法") ;
  }
}

abstract class Other{
//    abstract void run() ;
  run(){}
}

class Rainy extends Other{
    @override
      void run() {
        // TODO: implement run

      }
}





















