var countDowndate = new Date("Jan 1, 2025 11:00:00").getTime();

var x = setInterval(function() {
    var date = new Date().getTime();

    var dist = countDowndate - date;

    var days = Math.floor(dist /(1000*60*60*24));
    var hours = Math.floor((dist%(1000*60*60*24))/(1000*60*60));
    var min = Math.floor((dist%(1000*60*60))/(1000*60));
    var sec = Math.floor((dist%(1000*60))/(1000));

    console.log(days);
   document.getElementById("d").innerHTML = days  ;
   document.getElementById("h").innerHTML = hours ;
   document.getElementById("m").innerHTML = min;
   document.getElementById("s").innerHTML = sec;

    
   if (dist < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
},1000);