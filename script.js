let balance = 5000;

let usedCoupons = [];

function updateBalance(){

document.getElementById("balance").innerHTML = balance;

document.getElementById("amount").value="";

}

function addHistory(text){

let li=document.createElement("li");

li.innerHTML=text;

document.getElementById("history").appendChild(li);

}

function deposit(){

let amount=Number(document.getElementById("amount").value);

if(amount>0){

balance+=amount;

updateBalance();

document.getElementById("message").innerHTML="₹"+amount+" Deposited Successfully";

addHistory("Deposited ₹"+amount);

}

else{

document.getElementById("message").innerHTML="Enter Valid Amount";

}

}

function withdraw(){

let amount=Number(document.getElementById("amount").value);

if(amount<=0){

document.getElementById("message").innerHTML="Enter Valid Amount";

}

else if(amount>balance){

document.getElementById("message").innerHTML="Insufficient Balance";

}

else{

balance-=amount;

updateBalance();

document.getElementById("message").innerHTML="₹"+amount+" Withdrawn Successfully";

addHistory("Withdraw ₹"+amount);

}

}

function applyCoupon(){

let code=document.getElementById("coupon").value.toUpperCase();

let reward=0;

if(usedCoupons.includes(code)){

document.getElementById("message").innerHTML="Coupon Already Used";

return;

}

switch(code){

case "WELCOME100":

reward=100;

break;

case "SAVE200":

reward=200;

break;

case "BONUS500":

reward=500;

break;

default:

document.getElementById("message").innerHTML="Invalid Coupon";

return;

}

balance+=reward;

usedCoupons.push(code);

updateBalance();

document.getElementById("coupon").value="";

document.getElementById("message").innerHTML="Coupon Applied! ₹"+reward+" Added";

addHistory("Coupon "+code+" +₹"+reward);

}

function resetAccount(){

balance=5000;

usedCoupons=[];

document.getElementById("history").innerHTML="";

document.getElementById("message").innerHTML="Account Reset Successfully....";

updateBalance();

}