const loading = document.getElementById("loading");
const percentage = document.querySelector(".loading-screen__percentage");
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

function init() {        
    t = setInterval(makePercent,50);    
}

init();