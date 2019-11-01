<?php
error_reporting(-1);
ini_set('display_errors', 'Off');
ini_set('error_log', $_SERVER['DOCUMENT_ROOT'] . '/errors.txt');
ini_set('log_errors', 'On');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: *");
//header("Content-Type: *");
header("Content-Type: application/json");
//header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");

mb_internal_encoding("UTF-8");

require_once 'libs/rb-mysql.php';
R::setup( 'mysql:host=localhost;dbname=echarts','root', '' );
R::freeze( true );
if ( !R::testConnection() ) {
    http_response_code(403); //forbidden
    exit (json_encode('No connection'));
}


$post_data = json_decode(file_get_contents('php://input'), true);

$route = mb_strtolower($_SERVER['REQUEST_URI']);

$route_arr = explode('/', $route);
if (!$route_arr[0]) array_shift($route_arr);
if (!end($route_arr)) array_pop($route_arr);
if ( strripos(end($route_arr), '?') !== false ) array_pop($route_arr);



//GET [server]/api/persons
//GET [server]/api/persons/:id
//
//POST [server]/api/persons/



if ($route_arr[0] !== 'api') {
    http_response_code(400); //bad request
    exit (json_encode('Api interface required'));
}

if (!$post_data) {
    if ($route_arr[1] === 'persons') {
        if (isset($route_arr[2])) {
            $user = R::load('persons', $route_arr[2]);
            //echo json_encode($user);
            $response = $user;
        } else {
            if ($_GET['offset'] && $_GET['amount']) {
                $offset = (int) $_GET['offset'];
                $amount = (int) $_GET['amount'];
                $users = R::findAll('persons', 'ORDER BY id ASC LIMIT :offset, :count', ['offset' => $offset, 'count' => $amount]);
                $response = R::exportAll( $users );
            } else {
                $users = R::findAll('persons', 'ORDER BY id ASC LIMIT ?', [100]);//limit tofix
                $response = R::exportAll( $users );
            }
        }
        R::close();
    } else {
        http_response_code(404);
        exit (json_encode('Such API not found'));
    }
} else {
    try {
        $user = R::dispense('persons');
        $user -> name = $post_data['name'];
        $user -> surname = $post_data['surname'];
        $user -> age = $post_data['age'];
        R::store( $user );
        $response = $user;
    } catch (Exception $e) {
        http_response_code(415); //unsupported media type
        exit (json_encode('Such format is not supported'));
    }
}

http_response_code(200);
echo json_encode($response);
//echo json_encode($_GET['amount']);
//echo json_encode($post_data);
//echo json_encode($route_arr);