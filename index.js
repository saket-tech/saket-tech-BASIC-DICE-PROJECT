let p1=Math.floor(Math.random()*6)+1;
console.log(p1);
document.querySelector(".img1").setAttribute("src","./images/dice"+p1+".png");
let p2=Math.floor(Math.random()*6)+1;
console.log(p2);
document.querySelector(".img2").setAttribute("src","./images/dice"+p2+".png");

if (p1>p2){
    document.querySelector("h1").textContent="player 1 wins!";
}


else if (p1<p2){
    document.querySelector("h1").textContent="player 2 wins!";
}

else {
    document.querySelector("h1").textContent="Draw";
}

document.querySelector("button").addEventListener("click",function(){
    document.querySelector("h1").textContent="Refresh Me";
});