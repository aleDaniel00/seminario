<?
/*


$con = mysqli_connect("localhost","turncbct_web","vuw8upl8if=","turncbct_turnos");

if (mysqli_connect_errno())  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

die;
*/
$conn = mysql_connect('localhost', 'turncbct_web', 'vuw8upl8if=') or die("turnos:".mysql_error());
mysql_select_db("turncbct_turnos"); 

$sql = 'select * from test';
$result = mysql_query($sql, $conn) or die(mysql_error());
$t= mysql_fetch_row($result);
var_dump($t);
	 

 