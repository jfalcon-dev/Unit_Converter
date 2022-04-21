

let unit = 20;

let unitDisplay = document.getElementById("unit-display");


unitDisplay.textContent = unit;

let litersToGal = unit * 0.264172;



function userInput(){
    
    unit = document.getElementById("userInput").value;
    

    if (!(unit <=0 || unit >=0)){
        alert("Please enter a number");
    }
    
    
    lengthCnv();
    volCnv();
    massConv();
    
    
}

function lengthCnv(){
    
    let feetToMeter = unit * 0.3048;
    let meterToFeet = unit * 3.28084;
    
    let num1 = feetToMeter.toFixed(3);
    let num2 = meterToFeet.toFixed(3);
    
    let unitDisplayMeters = document.getElementById("unit-display-meters");
    let unitDisplayFeet = document.getElementById("unit-display-feet");
    unitDisplayMeters.textContent = unit;
    unitDisplayFeet.textContent = unit;

    
    let metToImp = document.getElementById("meter-to-feet");
    let impToMet = document.getElementById("feet-to-meter");
    
    
    metToImp.textContent = num2;
    impToMet.textContent = num1;
}

function volCnv(){
    
    let litersToGal = unit * 0.264172;
    let galToLiters = unit * 3.785412;
    
    let num1 = litersToGal.toFixed(3);
    let num2 = galToLiters.toFixed(3);
    
    let unitDisplayLiters = document.getElementById("unit-display-liters");
    let unitDisplayGallons = document.getElementById("unit-display-gallons");
    unitDisplayLiters.textContent = unit;
    unitDisplayGallons.textContent = unit;
    
    let metToImp = document.getElementById("liters-to-gallons");
    let impToMet = document.getElementById("gallons-to-liters");
    
    metToImp.textContent = num1;
    impToMet.textContent = num2;
}

function massConv(){
    
    let kgsToLbs = unit * 2.204623;
    let lbsToKgs = unit * 0.453592;
    
    let num1 = kgsToLbs.toFixed(3);
    let num2 = lbsToKgs.toFixed(3);
    
    let unitDisplayKilo = document.getElementById("unit-display-kilo");
    let unitDisplayLbs = document.getElementById("unit-display-lbs");
    
    unitDisplayKilo.textContent = unit;
    unitDisplayLbs.textContent = unit;
    
    let metToImp = document.getElementById("kilo-to-lbs");
    let impToMet = document.getElementById("lbs-to-kilo");
    
    metToImp.textContent = num1;
    impToMet.textContent = num2;
}

