<?php
$firstName = htmlspecialchars($_REQUEST['firstName']);
$lastName = htmlspecialchars($_REQUEST['lastName']);
$dob = htmlspecialchars($_REQUEST['dob']);
$email = htmlspecialchars($_REQUEST['email']);
$phone = htmlspecialchars($_REQUEST['phone']);
$productsPurchased = htmlspecialchars($_REQUEST['productsPurchased']);
$rb = htmlspecialchars($_REQUEST['rb']);
$ch = htmlspecialchars($_REQUEST['ch']);
$recommend = htmlspecialchars($_REQUEST['recommend']);
$comments = htmlspecialchars($_REQUEST['comments']);

echo <<<INFO
<div style="padding:0 50px">
<p>First Name: $firstName</p>
<p>Last Name: $lastName</p>
<p>Date of Birth: $dob</p>
<p>Email: $email</p>
<p>Phone: $phone</p>
<p>productsPurchased: $productsPurchased</p>
<p>rb: $rb</p>
<p>ch: $ch</p>
<p>recommend: $recommend</p>
<p>comments: $comments</p>
</div>
INFO;
?>