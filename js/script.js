console.log("Hello");

let d = new Date();
let minute = d.getMinutes();
let second = d.getSeconds();
let hour = d.getHours();
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

var interval = null;
var mp=minute*6, sp=second*6, hp=hour*30;

const clock = () => {

  var m = document.getElementById("minu");
  var s = document.getElementById("sec");
  var h = document.getElementById("hour");

  second++;
  if(second / 60 === 1){
        second = 0;
        minute++;

        if(minute / 60 === 1){
            minute = 0;
            hours++;

            if(hour /24 === 1){
            	hour=0;
            }
        }

    }


    if(second < 10){
        displaySeconds = "0" + second.toString();
    }
    else{
        displaySeconds = second;
    }

    if(minute < 10){
        displayMinutes = "0" + minute.toString();
    }
    else{
        displayMinutes = minute;
    }

    if(hour < 10){
        displayHours = "0" + hour.toString();
    }
    else{
        displayHours = hour;
    }


   mp = mp + 0.1;
   sp = sp + 6;
   hp = hp + 0.0041666667;

   if(sp === 360)
   	sp=0;
   if(mp === 360)
   	mp=0;
   if(hp === 360)
   	hp=0;

  // console.log(minute, second );

   console.log(hp , mp , sp);

  m.style.transform = "rotate(" + mp + "Deg)";
  s.style.transform = "rotate(" + sp + "Deg)";
  h.style.transform = "rotate(" + hp + "Deg)";
  document.getElementById("box").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

const start = ()  =>{
  interval = setInterval(clock,1000);
}

