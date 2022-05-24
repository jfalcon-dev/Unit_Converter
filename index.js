
let unit = 0;

let unitDisplay = document.querySelectorAll("span.unit-display");


function display(){
    
    
    for(let i = 0; i < unitDisplay.length ; i++){
        
        unitDisplay[i].textContent = unit;
    }
}

function getUnit(){
    unit = document.getElementById("user-input").value;
    display();
    lengthConversion();
    volumeConversion();
    massConversion();
}

function lengthConversion(){
    let meterToFeetDisplay = document.getElementById("meter-to-feet");
    let feetToMeterDisplay = document.getElementById("feet-to-meter");
    
    let meterToFeet = unit * 3.28084;
    let feetToMeter = unit * .3048;
    
    meterToFeetDisplay.textContent = meterToFeet.toFixed(3);
    feetToMeterDisplay.textContent = feetToMeter.toFixed(3);
    
}

function volumeConversion(){
    let literToGallonDisplay = document.getElementById("liter-to-gallon");
    let gallonToLiterDisplay = document.getElementById("gallon-to-liter");
    
    let literToGallon = unit / 3.78541 ;
    let gallonToLiter = unit * 3.78541 ;
    
    literToGallonDisplay.textContent = literToGallon.toFixed(3);
    gallonToLiterDisplay.textContent = gallonToLiter.toFixed(3);
}

function massConversion() {
    let kilogramsToPoundsDisplay = document.getElementById("kilograms-to-pounds");
    let poundsToKilogramsDisplay = document.getElementById("pounds-to-kilograms");
    
    let kilogramsToPounds = unit * 2.205;
    let poundsToKilograms = unit / 2.205;
    
    kilogramsToPoundsDisplay.textContent = kilogramsToPounds.toFixed(3);
    poundsToKilogramsDisplay.textContent = poundsToKilograms.toFixed(3);
}
