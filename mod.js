console.log('Welcome to spotify');

let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('progressbar');
let masterSongName=document.getElementById('masterSongName');
let gif=document.getElementById('gif');
let music=Array.from(document.getElementsByClassName('music'));

let songs=[
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq ", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},

]

music.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.classList.remove('gif');

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.classList.add('gif');

    }
})

audioElement.addEventListener('timeupdate',()=>{
   let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar=progress;

})
 myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
 });
 const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('play')).forEach((element)=>{
        element.classList.remove('fa-solid', 'fa-pause');
        element.classList.add('fa-solid', 'fa-play');
    })
}
Array.from(document.getElementsByClassName('play')).forEach((element)=>{
element.addEventListener('click',(e)=>{
     makeAllPlays();
     console.log(e.target.id);
     songIndex=parseInt(e.target.id);
     element.classList.remove('fa-solid', 'fa-play');
     element.classList.add('fa-solid', 'fa-pause');
     masterSongName.innerHTML=songs[songIndex-1].songName;
     audioElement.src=`songs/${songIndex}.mp3`;
     audioElement.currentTime=0;
     audioElement.play();
     gif.classList.remove('gif');
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
     
     

})


})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=10){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    masterSongName.innerHTML=songs[songIndex-1].songName
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    // gif.classList.remove('gif');
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=10
    }
    else{
        songIndex-=1;
    }
    masterSongName.innerHTML=songs[songIndex-1].songName
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    // gif.classList.remove('gif');
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})