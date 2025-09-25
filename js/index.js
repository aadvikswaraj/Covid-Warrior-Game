const tresuresound = new Audio("music/treasure.wav");
const hitsound = new Audio("music/hit.wav");
const losesound = new Audio("music/lose.wav");
const clicksound = new Audio("music/click.wav");
const musicsound = new Audio("music/music2.mp3");
musicsound.loop = true;
var lastpainttime = 0;
var speed = 4;
var score = 0;
var lost = 0;
var defenderposition = 0;
var winratio = 0;

function main(ctime) {
    window.requestAnimationFrame(main);
    if((ctime - lastpainttime)/1000 < 1/speed){
        return;
    }
    lastpainttime = ctime;
    gameEngine();
};

var lasttimevirusgenerated = false;

function gameEngine() {
    // Move The Viruses
    var all_viruses = document.getElementsByClassName("virus");
    for (let element_count = 0; element_count < all_viruses.length; element_count++) {
        let virusp = JSON.parse(all_viruses[element_count].getAttribute("data-p"));
        if (virusp.x < 10){
            virusp.x += 1;
            all_viruses[element_count].style.gridRowStart = virusp.x;
            all_viruses[element_count].setAttribute("data-p",JSON.stringify(virusp));
        }
        else if (virusp.y === defenderposition && (virusp.x === 9 || virusp.x === 10)) {
            all_viruses[element_count].remove();
            score += 1;
            tresuresound.pause();
            tresuresound.currentTime = 0;
            tresuresound.play();
            document.getElementById("score").innerText = "Score: "+score;
            if (lost!==0) {
                var winratio = (score/lost).toPrecision(4);
            };
            document.getElementById("winratio").innerText = "Win Ratio: "+(winratio);
        }
        else{
            hitsound.pause();
            hitsound.currentTime = 0;
            hitsound.play();
            all_viruses[element_count].remove();
            lost += 1;
            document.getElementById("lostscore").innerText = "Lost: "+lost;
            if (lost!==0) {
                var winratio = (score/lost).toPrecision(4);
            };
            document.getElementById("winratio").innerText = "Win Ratio: "+(winratio);
        };
    };
    if (lasttimevirusgenerated == false) {
        var newvirus = document.createElement("div");
        newvirus.classList.add("virus");
        newvirus.innerHTML = `<img src="img/covid.png" alt="Virus">`;
        var newvirusp = randomvirusp();
        newvirus.setAttribute("data-p",JSON.stringify({"x":0,"y":newvirusp}));
        document.getElementsByClassName("track")[newvirusp].appendChild(newvirus);
        lasttimevirusgenerated = true;
    }
    else{
        lasttimevirusgenerated = false;
    };
};

var lastvp = null;
function randomvirusp() {
    let min = 0;
    let max = 3;
    if (lastvp === null) {
        p = Math.floor(min+(max-min)*Math.random());
        return p;
    }
    else{
        p = Math.floor(min+(max-min)*Math.random());
        while (p !== lastvp) {
            lastvp = p;
            return p;
        };
    };
};
function updatedefenderp(p) {
    var defender_elements = document.getElementsByClassName("defender");
    for (let element_count = 0; element_count < defender_elements.length; element_count++) {
        defender_elements[element_count].remove();
    };
    clicksound.play();
    var newdefenderelement = document.createElement("div");
    newdefenderelement.innerHTML = "Vaccine";
    newdefenderelement.classList.add("defender");
    document.getElementsByClassName("track")[p].appendChild(newdefenderelement);    
};

var is_game_started = false;

function startgame(){
    window.requestAnimationFrame(main);
    musicsound.play();
    document.getElementById("welcome").style.display = "none";
    window.removeEventListener("keydown",startgame);
    window.addEventListener("keydown",function(e) {
        switch (e.key) {
            case "ArrowLeft":
                if (defenderposition < 1) {
                    defenderposition = 2;
                }
                else{
                    defenderposition -= 1;
                };
                updatedefenderp(defenderposition);
                break;
            case "ArrowRight":
                if (defenderposition > 1) {
                    defenderposition = 0;
                }
                else{
                    defenderposition += 1;
                };
                updatedefenderp(defenderposition);
                break;
            default:
                break;
        };
    });
    var all_viruses = document.getElementsByClassName("virus");
    for (let element_count = 0; element_count < all_viruses.length; element_count++) {
        let virusp = JSON.parse(all_viruses[element_count].getAttribute("data-p"));
        if (virusp.y === defenderposition && (virusp.x === 9 || virusp.x === 10)) {
            all_viruses[element_count].remove();
            score += 1;
            tresuresound.pause();
            tresuresound.currentTime = 0;
            tresuresound.play();
            document.getElementById("score").innerText = "Score: "+score;
            if (lost!==0) {
                var winratio = (score/lost).toPrecision(4);
            };
            document.getElementById("winratio").innerText = "Win Ratio: "+(winratio);
        };
    };
};
window.addEventListener("keypress",startgame);