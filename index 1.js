let texto = document.querySelector("h1");
let hero = document.querySelector(".hero");

//document.addEventListener("mousemove", function(e){
//    let x = e.offsetX;
//    let y = e.offsetY;
//    texto.style.textShadow = `${x}px ${y}px 0 rgba(255, 0, 255, 0.7)`;
//});

hero.addEventListener("mousemove", function(e){
    let {offsetX : x, offsetY: y} = e;
    let {offsetWidth: width, offsetHeight: height} = hero;
    if(this != e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    texto.style.textShadow = `${x / width*40 + 5}px ${y / height*40 + 5}px 0 rgba(255, 0, 255, 0.7) ,
                              ${-x / width*40 + 5}px ${-y / height*40 + 5}px 0 rgba(238, 255, 0, 0.83), 
                              ${(x / width*40 + 5) * -1}px ${y / height*40 + 5}px 0 rgba(0, 255, 221, 0.83)` ;
});