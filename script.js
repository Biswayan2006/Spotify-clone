console.log("Welcome to Spotify");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio('let me move you.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
  {songName: "Let me move you", filePath: "spotify clone/let me move you.mp3", coverPath: "let me move you.jpg"},
  {songName: "Closer", filePath: "spotify clone/Closer The Chainsmokers.mp3", coverPath: "Closer.jpg"},
  {songName: "Shape of you", filePath: "spotify clone/shape of you.mp3", coverPath: "shape of you.jpg"},
  {songName: "Havana", filePath: "spotify clone/havana.mp3", coverPath: "havana.jpg"},
  {songName: "Perfect", filePath: "spotify clone/perfect.mp3", coverPath: "perfect.jpg"},
  {songName: "Despacito", filePath: "spotify clone/despacito.mp3", coverPath: "despacito.jpg"}
];

 // audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.replace('fa-play', 'fa-pause');
      gif.style.opacity = 1;
    } else {
      audioElement.pause();
      masterPlay.classList.replace('fa-pause', 'fa-play');
      gif.style.opacity = 0;
    }
  });
  

// listen to events
audioElement.addEventListener('timeupdate', () => {
 
  // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
 
    myProgressBar.value = progress;

});

myProgressBar.addEventListener ('change', ()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})