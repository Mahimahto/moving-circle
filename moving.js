let ball = document.querySelector(".circle");
let x = parseInt(getComputedStyle(ball).left),
    y = parseInt(getComputedStyle(ball).top);
document.addEventListener('keydown',(e) => {
    console.log(e.key);
    if (e.key === "w"||e.key === "W")
        y -= 10;
    else if (e.key === "a"||e.key === "A") 
        x -= 10;
    else if (e.key === "s"||e.key === "S") 
        y += 10
    else if (e.key === "d"||e.key === "D")
        x += 10;
    
    ball.style.top = y + "px";
    ball.style.left = x + "px";
})