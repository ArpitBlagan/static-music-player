let index=0;
let audioele=new Audio("songs/3.mp3");
let masterPlay=document.getElementById("masterPlay");
let progress=document.getElementById("progress");
let gif=document.getElementById("gif");
let songs=[
    {songName:"ceiol",filePaht:"songs/1.mp3",coverPaht:"covers/1,jpg"},
    {songName:"ceiol",filePaht:"songs/2.mp3",coverPaht:"covers/2,jpg"},
    {songName:"ceiol",filePaht:"songs/3.mp3",coverPaht:"covers/3,jpg"},
    {songName:"ceiol",filePaht:"songs/4.mp3",coverPaht:"covers/4,jpg"},
    {songName:"ceiol",filePaht:"songs/5.mp3",coverPaht:"covers/5,jpg"},
    {songName:"ceiol",filePaht:"songs/6.mp3",coverPaht:"covers/6,jpg"},
    {songName:"ceiol",filePaht:"songs/7.mp3",coverPaht:"covers/7,jpg"}
];
masterPlay.addEventListener('click',()=>{
    if(audioele.paused||audioele.currentTime==0){
        audioele.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");gif.style.opacity=1;
    }else{
        audioele.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
});
audioele.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    var pro=parseInt((audioele.currentTime/audioele.duration)*100);
    progress.value=pro;
});
progress.addEventListener('change',()=>{
    audioele.currentTime=parseInt((progress.value*audioele.duration)/100);
});

Array.from(document.getElementsByClassName('changeitem')).forEach((element)=>{
    element.addEventListener('click',(e)=>{ 
        audioele.currentTime=0;index=e.target.id;
        audioele.src="songs/"+index+".mp3";
        if(audioele.paused||audioele.currentTime==0){
            audioele.play();
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");gif.style.opacity=1;
        }else{
            audioele.pause();
            masterPlay.classList.remove("fa-pause-circle");
            masterPlay.classList.add("fa-play-circle");
            gif.style.opacity=0;
        }
    });
});
document.getElementById('prev').addEventListener('click',()=>{
    if(index>=1){index-=1;}else{index=0;}audioele.pause;
    audioele.src="songs/"+index+".mp3";
    if(audioele.paused||audioele.currentTime==0){
        audioele.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");gif.style.opacity=1;
    }else{
        audioele.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
});
document.getElementById('next').addEventListener('click',()=>{
    if(index<9){index+=1;}else{index=0;}audioele.pause;
    audioele.src="songs/"+index+".mp3";
    
    if(audioele.paused||audioele.currentTime==0){
        audioele.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");gif.style.opacity=1;
    }else{
        audioele.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
});