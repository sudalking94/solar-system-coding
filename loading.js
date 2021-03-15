const loading = document.getElementById("loading");
const percentage = document.querySelector(".loading-screen__percentage");
const planetName = document.querySelectorAll(".planet-name");
const mecury = document.getElementById("hover-mecury");


let i = 1;
let t = null;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function demo() {                
                await sleep(2000);
                document.getElementById("loading-screen").style.display = 'none';
            }
function makePercent() {
    let div = document.createElement("div");
        div.classList.add("loading__bar");
        loading.append(div);
        percentage.innerHTML = i + "%";
        i++;
        if (i >= 101) {
            clearInterval(t);
            demo();                                    
        }
}
function orbigColor(e) {
    if (e.type == "mouseover") {
        document.getElementById("mecury-div").classList.remove("orbit");
        document.getElementById("mecury-div").classList.add("orbit-color");
    }
    else {
        document.getElementById("mecury-div").classList.remove("orbit-color");
        document.getElementById("mecury-div").classList.add("orbit");
    }
    
}
function init() {        
    t = setInterval(makePercent,50);    
    mecury.addEventListener("mouseover", orbigColor);
    mecury.addEventListener("mouseleave",orbigColor)
}

init();