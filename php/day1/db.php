<?php
/**
 * Created by PhpStorm.
 * User: Liaoyu
 * Date: 2019/1/24
 * Time: 20:09
 */

/*$conn = new mysqli('localhost','root','Rou123@');
if($conn->connect_errno){
    die('连接失败'.$conn->connect_errno) ;
}
echo '连接成功' ;*/

try{
    $pdo = new PDO('mysql:host=localhost;dbname=admin','root','Rou123@') ;
    $pdo->setAttribute(PDO::ATTR_AUTOCOMMIT, PDO::ERR_NONE);
    $pdo->exec('set names utf8');
//    $sql = "insert into user_info( username, password ) value('mischen','Rou123')";
//    echo "当前影响的行数:" . $pdo->exec($sql);
//    echo "当前插入数据主键的ID:" . $pdo->lastInsertId();
//    $sql = "update user_info set username = 'Srainy' where id = 2 ";
//    echo "当前影响行数:".$pdo->exec($sql);
//    $sql = "select * from user_info" ;
//    $data = $pdo->query($sql);
//
//    var_dump($data->rowCount());
//    $res = $data->execute();
//    $data->setFetchMode(PDO::FETCH_ASSOC);
//    var_dump($data);
//    $res = $data->fetchAll();
//    var_dump($res);

//    $sql = "insert into user_info(username,password) values(? ,? )";
//    $stmt = $pdo->prepare($sql); //返回PDOStatement
//    $stmt->bindValue(1,'Light');
//    $stmt->bindValue(2,'Rou521');

//    $stmt->bindParam(1,$username);
//    $stmt->bindParam(2,$password);
//    $username = "Param";
//    $password = "5211314.";


//    $stmt->execute(array('horse','12345'));
//    echo $stmt->rowCount();

//    $sql = "delete from user_info where id =  ? " ;
//    $stmt = $pdo->prepare($sql);
//    $stmt->execute(array(7));
//    echo $stmt->rowCount();

//    $username = 'update' ;
//    $id = '2';
//    $sql = "update  user_info set username = ? where id = ?   " ;
//    $stmt = $pdo->prepare($sql);
//    $stmt->execute(array($username, $id));

    $id = 2 ;
    $sql = "select * from user_info " ;
    $stmt = $pdo->prepare( $sql ) ;
    $stmt->execute() ;

//    $stmt->bindColumn("username",$username);
//    $stmt->bindColumn("password",$password);
//    while($row = $stmt->fetch()){
//        echo $username."---" .$password."<br>";
//    } ;


    foreach ($stmt as $keys => $value){
//        echo $value['username'];
//        var_dump($stmt);
//       var_dump($value);
    }



}
catch (PDOException $e){
    echo $e->getMessage() ;
}


