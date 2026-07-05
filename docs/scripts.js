var l2 = document.getElementById("imgl2")
var l = document.getElementById("imgl");
var i = document.getElementById("img");
var r = document.getElementById("imgr");
var r2 = document.getElementById("imgr2")

var images = [l2,l,i,r,r2];

var count=images.length
var cur=3
setInterval(()=>{
    cur=(cur+1)%count
    images[(cur-2+count)%count].className="scrimg_l2"
    images[(cur-1+count)%count].className="scrimg_l"
    images[cur].className="scrimg"
    images[(cur+1)%count].className="scrimg_r"
    images[(cur+2)%count].className="scrimg_r2"
},3000)

document.getElementById("itch").onclick= () => {
    window.open("https://SaturnGamesStudio.itch.io","_blank");
};

document.getElementById("up").onclick= () => {
    window.scrollTo({top:0,behavior:"smooth"});
};

const header = document.querySelector("header");
window.addEventListener("scroll",()=>{
    if(window.scrollY>50) header.classList.add("scrolled_nav")
    else header.classList.remove("scrolled_nav")
})
