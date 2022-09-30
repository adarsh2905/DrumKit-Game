window.addEventListener("keydown", function(event) {
    if(event.key === "A" || event.key === "a"){
        let music1 = document.getElementById("audio1");
        let buttonA = document.getElementById("buttonA");
        playMusic(music1, buttonA);
    }
})

window.addEventListener("keydown", function(event) {
    if(event.key === "S" || event.key === "s"){
        let music2 = document.getElementById("audio2");
        let buttonS = document.getElementById("buttonS");
        playMusic(music2, buttonS);
    }
})

window.addEventListener("keydown", function(event) {
    if(event.key === "D" || event.key === "d"){
        let music3 = document.getElementById("audio3");
        let buttonD = document.getElementById("buttonD");
        playMusic(music3, buttonD);
    }
})

window.addEventListener("keydown", function(event) {
    if(event.key === "F" || event.key === "f"){
        let music4 = document.getElementById("audio4");
        let buttonF = document.getElementById("buttonF");
        playMusic(music4, buttonF);
    }
})

window.addEventListener("keydown", function(event) {
    if(event.key === "G" || event.key === "g"){
        let music5 = document.getElementById("audio5");
        let buttonG = document.getElementById("buttonG");
        playMusic(music5, buttonG);
    }
})

window.addEventListener("keydown", function(event) {
    if(event.key === "H" || event.key === "h"){
        let music6 = document.getElementById("audio6");
        let buttonH = document.getElementById("buttonH");
        playMusic(music6, buttonH);
    }
})

window.addEventListener("keydown", function(event) {
    if(event.key === "J" || event.key === "j"){
        let music7 = document.getElementById("audio7");
        let buttonJ = document.getElementById("buttonJ");
        playMusic(music7, buttonJ);
    }
})

window.addEventListener("keydown", function(event) {
    if(event.key === "K" || event.key === "k"){
        let music8 = document.getElementById("audio8");
        let buttonK = document.getElementById("buttonK");
        playMusic(music8, buttonK);
    }
})

window.addEventListener("keydown", function(event) {
    if(event.key === "L" || event.key === "l"){
        let music9 = document.getElementById("audio9");
        let buttonL = document.getElementById("buttonL");
        playMusic(music9, buttonL);       
    }
})

function playMusic(music, button) {
    if (music.paused) {
        music.play();
        button.classList.add("key-highlight");
        setTimeout(function(){ 
            button.classList.remove("key-highlight");
        },300);
    }else{
        music.currentTime = 0;
        button.classList.add("key-highlight");
        setTimeout(function(){ 
            button.classList.remove("key-highlight");
        },300);
    }
}
