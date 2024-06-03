let display = document.getElementById("display");
let on = document.getElementById("on");
let off = document.getElementById("off");
let clear = document.getElementById("clear");
let count = 0;
let milliseconds = 0;
let sec = 0;
let min = 0;
let hour = 0;
let show ;

function counter(){
    count++;
    milliseconds++;
    if(milliseconds===100){
        sec++;
        milliseconds=0;
        if(sec===60){
            min++;
            sec=0;
            if(min===60){
               hour++;
               min=0;
        
            }
        }
    }
    display.innerText = `0${hour} : 0${min} : 0${sec} : ${milliseconds}`;
    on.setAttribute('disabled', 'disabled');
}

function start(){
    show = setInterval(counter, 10)
}

function pause(){
    clearInterval(show);
    on.removeAttribute('disabled', 'disabled');
}

function reset(){
    clearInterval(show);
    sec = 0;
    min = 0;
    hour = 0;
    display.innerText = `00 : 00 : 00 :00`;
}