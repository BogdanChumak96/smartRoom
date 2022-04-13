function noConnection() {
alert("No connect");
}

function enterName(){
        var name= prompt("Enter your name");
        document.getElementById("name").innerHTML=name;
    }

    
   function alertTemp(t){
        if(t>22){
            alert("Your temperature: "+t+" higher than normal 22");
        }
        else {
            alert("Your temperature is OK");
        }

    }
function sum(){
  let a=prompt("Etner your number a:");
  let b=prompt("Etner your number b:");
  a=parseInt(a)
  b=parseInt(b)
  let c=(a+b);
  alert("Your sum is:"+c);
}

function startTime() {
  let days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  let nameMonth=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep',
                'Oct','Nov','Dec'];
  let today = new Date();
  window.h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let month=today.getMonth(); //0-jan 11-dec
  let day=today.getDate();
  let wday=today.getDay(); //0-sun 6-sun
  document.getElementById('month').innerHTML=nameMonth[month];
  document.getElementById('day').innerHTML=day;
  document.getElementById('wday').innerHTML=days[wday];
  if(h<10){
       h="0"+h;
  }
    if(m<10){
     m="0"+m;
  }
    if(s<10){
    s="0"+s;
  }
  document.getElementById('time').innerHTML= h+":"+ m+":"+ s;
  var t = setTimeout(startTime, 1000);
}


var counter=0;
 function changeColor() {
   counter++;
      var elemColor = document.getElementById("chColor");
switch(counter){
  case 1: elemColor.style.color='SlateGray';
break;
   case 2: elemColor.style.color='Tan';
break;
  case 3: elemColor.style.color='Turquoise';
    break;
  case 4: elemColor.style.color='LemonChiffon';
    break;
  case 5: counter=0;
    break;
 }          
 }
hum=100;

function Flower(h){
hum-=h;
var flower=document.getElementById("flower").value=hum;
  if(hum<20){
        var newElem = document.createElement("div");
  newElem.innerHTML = "<div align='right' style='color:red;'>Polei Cvetok</div>";
    newElem.setAttribute('id', 'test');
        curElem = document.getElementById("alert");
        document.body.insertBefore(newElem, curElem);
  }
}

function FlowerControl(){
hum=100;
document.getElementById("flower").value=hum;

}

var image=document.getElementById("Img");
    var imgArr=["https://i.ibb.co/9ZvgNtP/kover1.jpg",
        "https://i.ibb.co/NFBNM5v/kover2.png",
    "https://i.ibb.co/xgC8Kj0/kover3.png",
        "https://i.ibb.co/LCqXjBp/kover0.png"]
    var selector=0;
    function carpetSwitch() {
        image.src = imgArr[selector];
        selector++;
        if (selector>=4){
            selector=0;
        }
    }

function changeWin(){
  var win=document.getElementById("colorWindow");
  if(window.h>=0 && window.h<6 || window.h>=20 && window.h<=23){
     win.style.background="#408eed";
  }
  if(window.h>=6 && window.h<20){
     win.style.background="#b18111";
  }
}




