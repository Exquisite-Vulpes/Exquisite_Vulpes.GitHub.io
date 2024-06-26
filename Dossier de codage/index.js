console.log(`hello`);
console.log(`Hola`);


//window.alert(`Alert`);

//one line comment

/*multi line comment*/


let x;
x = 100

//x = x +3
//x = x **7
//x +=1
let randomNum =  Math.floor(Math.random() * 6) + 1;

console.log(randomNum)


const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const counter = document.getElementById("counter")
let count = 0;

increase.onclick = function(){
          count++;
          counter.textContent = count;

}

reset.onclick = function(){
    count = 0;
    counter.textContent = count;

}

decrease.onclick = function(){
    count--;
    counter.textContent = count;

}


let Word = "Bird"

let username;

const PI = 3.14159
let radius;
let circumference;

/*radius = window.prompt(`Enter the radius of a circle`);
radius = Number(radius);

circumference = 2 * PI * radius

console.log(circumference)*/

//username = window.prompt("What's your username?");

console.log(username);

//console.log(`you are ${Word} `);

document.getElementById("text2").textContent = `x is = ${username}`;

document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("myinput").value;  
    document.getElementById("toptag").textContent = `Welcome ${username}`
}



