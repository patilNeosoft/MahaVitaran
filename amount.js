
function calc(units) {
var units=document.getElementById("myInput").value;
 
    var units;
    var amount;
    const fixed = 115;
    if (units <= 100) {
        amount = units * 3.36;
        var whel = 1.38 * units;
    }
    else if (units > 100 && units <= 300) {
        var whel = 1.35 * units;
        amount = 100 * 3.36;
        units = units - 100;
        amount = units * 7.34 + amount;
    }
    else if (units > 300 && units <= 500) {
        var whel = 1.35 * units;
        amount = 100 * 3.36 + 200 * 7.34;
        units = units - 300;
        amount = units * 10.37 + amount;
    }
    var vh = (whel + fixed + amount) * (0.16);
    var total = (whel + fixed + amount) + vh;
    document.getElementById('op').innerHTML=("Rs "+total);  
}


//whel working perfect
//fixed working perfect
//vh working perfect
//amount working perfect