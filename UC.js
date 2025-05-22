// const temp = [100,180,10,80,180];
const meters = [1000000,100000,10000,1000,100,10,1,25.4,304.8,914.4];
const grams = [1000000,100000,10000,1000,100,10,1,28349.52312500033,453592.369999995,1000000000];
// const datas = [1,1024,1048576,1073741824,1099511627776,1125899906842620,1152921504606850000,Infinity];
var a,b,c;

function convdn(i){
    switch(i){
        case 0:     // Temperature Converter
            a = document.getElementById("u1").value * 1;
            b = document.getElementById("u2").value * 1;
            c = document.getElementById("i1").value / 1;
            switch(a){
                case 0: cel();  break;  // Celcius
                case 1: fah();  break;  // Fahrenheit
                case 2: kel();  break;  // Kelvin
                case 3: rea();  break;  // Reaumur
                case 4: ran();  break;  // Rankine
            }
            document.getElementById("i2").value = c;
            break;
        case 1:     // Length Converter
            a = document.getElementById("u3").value * 1;
            b = document.getElementById("u4").value * 1;
            c = document.getElementById("i3").value * meters[a] / meters[b];
            document.getElementById("i4").value = c;
            break;
        case 2:     // Weight Converter
            a = document.getElementById("u5").value * 1;
            b = document.getElementById("u6").value * 1;
            c = document.getElementById("i5").value * grams[a] / grams[b];
            document.getElementById("i6").value = c;
            break;
        case 3:     // Data Converter
            a = document.getElementById("u7").value * 1;
            b = document.getElementById("u8").value * 1;
            c = document.getElementById("i7").value * Math.pow(2,(a-b)*10);
            document.getElementById("i8").value = c;
            break;
        default:    // Undefined Converter
            document.getElementById("i0").value = document.getElementById("i9").value;
    }
}
function convup(i){     // Swapped Input <=> Output
    switch(i){
        case 0:
            a = document.getElementById("u2").value * 1;
            b = document.getElementById("u1").value * 1;
            c = document.getElementById("i2").value / 1;
            switch(a){
                case 0: cel();  break;
                case 1: fah();  break;
                case 2: kel();  break;
                case 3: rea();  break;
                case 4: ran();  break;
            }
            document.getElementById("i1").value = c;
            break;
        case 1:
            a = document.getElementById("u4").value * 1;
            b = document.getElementById("u3").value * 1;
            c = document.getElementById("i4").value * meters[a] / meters[b];
            document.getElementById("i3").value = c;
            break;
        case 2:
            a = document.getElementById("u6").value * 1;
            b = document.getElementById("u5").value * 1;
            c = document.getElementById("i6").value * grams[a] / grams[b];
            document.getElementById("i5").value = c;
            break;
        case 3:
            a = document.getElementById("u8").value * 1;
            b = document.getElementById("u7").value * 1;
            c = document.getElementById("i8").value * Math.pow(2,(a-b)*10);
            document.getElementById("i7").value = c;
            break;
        default:
            document.getElementById("i9").value = document.getElementById("i0").value;
    }
}

function cel(){
    switch(b){
        case 0:     // Celcius to Celcius
            break;
        case 1:     // Celcius to Fahrenheit
            c = c * 9 / 5;
            c += 32;
            break;
        case 2:     // Celcius to Kelvin
            c += 273.15;
            break;
        case 3:     // Celcius to Reaumur
            c = c * 4 / 5;
            break;
        case 4:     // Celcius to Kelvin to Fahrenheit
            c += 273.15;
            c = c * 9 / 5;
            break;
        default:    // Celcius to Celcius
            c += 0;
            break;
    }
}
function fah(){
    switch(b){
        case 0:     // Fahrenheit to Celcius
            c -= 32;
            c = c * 5 / 9;
            break;
        case 1:     // Fahrenheit to Fahrenheit
            break;
        case 2:     // Fahrenheit to Celcius to Kelvin
            c -= 32;
            c = c * 5 / 9;
            c += 273.15;
            break;
        case 3:     // Fahrenheit to Reaumur
            c -= 32;
            c = c * 4 / 9;
            break;
        case 4:     // Fahrenheit to Rankine
            c += 459.67;
            break;
        default:    // Fahrenheit to Undefined
            c -= 32;
            break;
    }
}
function kel(){
    switch(b){
        case 0:     // Kelvin to Celcius
            c -= 273.15;
            break;
        case 1:     // Kelvin to Celcius to Fahrenheit
            c -= 273.15;
            c = c * 9 / 5;
            c += 32;
            break;
        case 2:     // Kelvin to Kelvin
            c += 0;
            break;
        case 3:     // Kelvin to Celcius to Reaumur
            c -= 273.15;
            c = c * 4 / 5;
            break;
        case 4:     // Kelvin to Fahrenheit
            c = c * 9 / 5;
            break;
        default:    // Kelvin to Celcius
            c -= 273;
            break;
    }
}
function rea(){
    switch(b){
        case 0:     // Reaumur to Celcius
            c = c * 5 / 4;
            break;
        case 1:     // Reaumur to Fahrenheit
            c = c * 9 / 4;
            c += 32;
            break;
        case 2:     // Reaumur to Celcius to Kelvin
            c = c * 5 / 4;
            c += 273.15;
            break;
        case 3:     // Reaumur to Reaumur
            break;
        case 4:     // Reaumur to Fahrenheit to Kelvin
            c = c * 9 / 4;
            c += 491.67;
            break;
        default:    // Reaumur to Undefined
            c = 0;
            break;
    }
}
function ran(){
    switch(b){
        case 0:     // Rankine to Celcius
            c = c * 5 / 9;
            c -= 273.15;
            break;
        case 1:     // Rankine to Fahrenheit
            c -= 459.67;
            break;
        case 2:     // Rankine to Celcius
            c = c * 5 / 9;
            break;
        case 3:     // Rankine to Reaumur
            c = c * 4 / 9;
            c -= 218.52;
            break;
        default:    // Rankine to Ranking
            break;
    }
}