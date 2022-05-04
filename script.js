console.log("Welcome to song app..");

//Initialize the variables

let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");

let soundGif = document.getElementById("soundGif");

let songItems = Array.from(document.getElementsByClassName("songItem"));

let masterSongName = document.getElementById("masterSongName");

let songs = [
    { songName: "halka suroor", filePath: "1.mp3" },
    { songName: "Bolna", filePath: "2.mp3" },
    { songName: "closer", filePath: "3.mp3" },
    { songName: "daawat", filePath: "4.mp3" },
    { songName: "lambiyaan", filePath: "5.mp3" },
    { songName: "vodka", filePath: "6.mp3" },

];

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play();


// Handle play/pause click

masterPlay.addEventListener("click", () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        soundGif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        soundGif.style.opacity = 0;

    }
});

//Listen to events

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    // update seekbar

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;

});


myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach(element => {
     console.log(element);
         element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");

    }
    
    )};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(element => {
    element.addEventListener("click", (e) => {
        soundGif.style.opacity = 1;
        console.log(e);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
    });
});


document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=5){
        songIndex=0;
    }

    else{
        songIndex+=1;
    }
    
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
});


document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=0;
    }

    else{
        songIndex-=1;
    }
    
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
});
