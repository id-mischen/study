<?php
/**
 * Created by PhpStorm.
 * User: Liaoyu
 * Date: 2019/2/19
 * Time: 13:56
 */

try {
    $db = new PDO('mysql:host=localhost;dbname=test', 'root', 'Rou123@');
    var_dump($db);
} catch (PDOException $e) {
    print "Error: " . $e->getMessage() . "<br/>";
    die();
}
