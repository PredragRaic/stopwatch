let seconds = 0;
let minutes = 0;
let hours = 0;

let zeroPlusSec = 0;
let zeroPlusMin = 0;
let zeroPlusHou = 0;

let interval;

function stopWatch(){
    seconds++;
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }
    if(seconds < 10){
        zeroPlusSec = '0' + seconds;
    }
    else{
        zeroPlusSec = seconds;
    }
    if(minutes < 10){
        zeroPlusMin = '0' + minutes;
    }
    else{
        zeroPlusMin = minutes;
    }
    if(hours < 10){
        zeroPlusHou = '0' + hours;
    }
    else{
        zeroPlusHou = hours;
    }
    document.querySelector('.second').innerHTML = zeroPlusSec;
    document.querySelector('.minut').innerHTML = zeroPlusMin;
    document.querySelector('.hour').innerHTML = zeroPlusHou;
}



function Start(){
    interval = setInterval(stopWatch, 1000);
    document.querySelector('.start').disabled = true;
}

function Stop(){
    clearInterval(interval);
    document.querySelector('.start').disabled = false;
}

function Reset(){
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(interval);
    document.querySelector('.start').disabled = false;

    document.querySelector('.second').innerHTML = '00';
    document.querySelector('.minut').innerHTML = '00';
    document.querySelector('.hour').innerHTML = '00';

}