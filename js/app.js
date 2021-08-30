//select the item with DOM selction



var hourTwo = document.getElementById('houR');
var minuteTwo = document.getElementById('minute');
var secondTwo = document.getElementById ('second');

function newTime(){
    var myTarikh = new Date();
    var myHr = myTarikh.getHours();
    var myMin = myTarikh.getMinutes();
    var mySec = myTarikh.getSeconds();
    
    myHr = myHr % 12;
    myHr = myHr ? myHr:12;
    myHr = myHr < 10 ? '0' + myHr:myHr;
    myMin = myMin < 10 ? '0'+myMin:myMin;
    mySec = mySec<10?'0'+mySec:mySec;

    hourTwo.textContent = myHr;
    minuteTwo.textContent = myMin;
    secondTwo.textContent = mySec;

}

setInterval(newTime,1000);