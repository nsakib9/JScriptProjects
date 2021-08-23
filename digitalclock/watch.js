window.addEventListener("DOMContentLoaded", showTime());



function showTime(){
    let date = new Date();
    // console.log(date.setTime(50000));
    // date.setTime(500000000);

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";


    // if(h==0){
    //     h=12;
    // }
    // if(h>12){
    //     h= h-12;
    //     session = "PM";
    // }
    // if(h < 10){
    //     h="0"+ h;
    // }
    // if(m < 10){
    //     m="0" +m;
    // }
    // if(s < 10){
    //     s="0" +s;
    // }
h = h < 10 ? (h = '0' + h) : h;
m = m < 10 ? (m = '0' + m) : m;
s = s < 10 ? (s = '0' + s) : s;

// const time = h + ":" +m + ":" + s+""+'|'+ ""+session;
const time =` ${h}:${m}:<small>${s}|${session}</small>.`;

// console.log(time);
document.getElementById("DisplayClock").innerHTML = time;
setTimeout(showTime, 1000);


// change body background 
let bg;
const userName = "sakib";
const user = document.getElementById("User");

// console.log(user)

if (h<8 && session === "AM"){
    bg = `url(https://source.unsplash.com/random)`;
    user.innerHTML = `Good morning ${userName}`;
}else if(h<11 && session === "AM") {
    bg = `url(https://source.unsplash.com/random)`;
    user.innerHTML = `Good day ${userName}`;
}else if(h<8 && session === "PM"){
    bg = `url(https://source.unsplash.com/random)`;
    user.innerHTML = `Good afternoon ${userName}`;
}else{
    bg = `url(https://source.unsplash.com/random)`;
    user.innerHTML = `Good evening ${userName}`;
}

// insert bgimage 
const bdoy = document.querySelector("body");
bdoy.style.background = bg;

}


document.querySelector(".focus-container input").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        const focus = document.querySelector(".focus-container input")
        document.querySelector(".focus-container").innerHTML = `<h6>Today: </h6><h1>${focus.value}</h1>`
    }
})
