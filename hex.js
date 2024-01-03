"use strict";
const hex = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C','D', 'E'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const container = document.querySelector(".container");
const text = document.querySelector("h2");
btn.addEventListener('click',()=>{
    let hexCode = '#';
    for(let i=0;i<6;i++){
        hexCode = hexCode + hex[getRandomNumber()];
    }
    container.style.backgroundColor = hexCode;
    // color.textContent = hexCode;
    if(hexCode=='#000000'){
        color.textContent = hexCode;
        text.style.color = "white";
    }else{
        color.textContent = hexCode;
    }
})

const getRandomNumber = function(){
    return Math.floor(Math.random() * hex.length);
}

