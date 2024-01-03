"use strict";
const colors = ["red", "green", "blue", "rgb(28, 110, 219)","#ed3fc8"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const container = document.querySelector(".container");

btn.addEventListener("click",function(){
    // console.log(document.body)
    const randomNumber = getRandomNumber();
    container.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

const getRandomNumber = function(){
    return Math.floor(Math.random() * colors.length);
}