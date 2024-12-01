let calc = document.querySelector(".calculator");
let opert = document.getElementById("opert");
let blak = document.querySelector(".black");
let pupl = document.querySelector(".purple");
let yelo = document.querySelector(".yellow");
let whit = document.querySelector(".white");

blak.addEventListener("click",()=>{
    calc.style.backgroundColor = "Black";
    opert.style.color = "#199ae6e1";
});
pupl.addEventListener("click",()=>{
    calc.style.backgroundColor = "purple";
    opert.style.color = "#f8eed7e1";
});
yelo.addEventListener("click",()=>{
    calc.style.backgroundColor = "#ff9900e5";
    opert.style.color = "black";
});
whit.addEventListener("click",()=>{
    calc.style.backgroundColor = "#0d0941e5";
    opert.style.color = "#d0e420e1";
});
