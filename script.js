 console.log('MY Spotify is the best!');
 

 // Initialize the variables

 let songIndex = 0;
 let audioElement = new Audio('128-Hauli Hauli - Khel Khel Mein 128 Kbps.mp3');
 let masterplay =document.getElementById('masterplay');
 let mastersongname =document.getElementById('MasterSongName');
 let myProgressBar = document.getElementById('myProgressBar');
 let songItems= Array.from(document.getElementsByClassName('songItems'));
 const playIcons = document.querySelectorAll('.songItemPlay');
 

 let songs=[
        {songName: 'Hauli Hauli - Khel Khel Mein', filepath: '128-Hauli Hauli - Khel Khel Mein 128 Kbps.mp3' ,coverpath: 'songimg1.jpg' },
        {songName: 'Aayi Nai - Stree 2', filepath: '128-Aayi Nai - Stree 2 128 Kbps.mp3', coverpath: 'songimg2.jpg'},
        {songName: 'Apna Bana Le - Bhediya', filepath: '128-Apna Bana Le - Bhediya 128 Kbps.mp3', coverpath: 'songimg3.jpg'},
        {songName: 'Gori Hai Kalaiyan - Mere Husband Ki Biwi', filepath: '128-Gori Hai Kalaiyan - Mere Husband Ki Biwi 128 Kbps.mp3', coverpath: 'songimg4.jpg'},
        {songName: 'Hua Main - Animal', filepath: '128-Hua Main - Animal 128 Kbps.mp3', coverpath: 'songimg5.jpg'},
        {songName: 'Leke Prabhu Ka Naam - Tiger 3', filepath: '128-Leke Prabhu Ka Naam - Tiger 3 128 Kbps.mp3', coverpath: 'songimg6.jpg'},
        {songName: 'Hum Toh Deewane - Yasser Desai', filepath: '128-Hum Toh Deewane - Yasser Desai 128 Kbps.mp3', coverpath: 'songimg7.jpg'},
        {songName: 'Mera Na - Sidhu Moose Wala', filepath: '128-Mera Na - Sidhu Moose Wala 128 Kbps.mp3', coverpath: 'songimg8.jpg'},
        {songName: 'Toofan - KGF Chapter 2', filepath: '128-Toofan - KGF Chapter 2 128 Kbps.mp3', coverpath: 'songimg9.jpg'},
        {songName: 'Tu Hai Champion - Chandu Champion',filepath: '128-Tu Hai Champion - Chandu Champion 128 Kbps.mp3', coverpath: 'songimg10.jpg'}
 ]


 songItems.forEach((element,i) =>{ 
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
 })

 

 // Audio Element

 // Handle play/pause click

 masterplay.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
        }
        else{
            audioElement.pause();
            masterplay.classList.add('fa-play-circle');
            masterplay.classList.remove('fa-pause-circle');
        }
 })

 document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        event.preventDefault();
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
        }
        else{
            audioElement.pause();
            masterplay.classList.add('fa-play-circle');
            masterplay.classList.remove('fa-pause-circle');
        }
    }
});





audioElement.addEventListener('timeupdate',()=>{
    console.log('Timeupdate');
    // update seekbar
    progress=parseFloat (audioElement.currentTime/audioElement.duration*100);
    console.log(progress);
    myProgressBar.value =progress;
    if(progress==100){
        audioElement.pause();
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');

    }
 }) 

 myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
 })

//  makeallPlay=()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle'); 
//         element.classList.add('fa-play-circle');
//         document.querySelectorAll('.songItems').forEach(item => {
//             item.classList.remove('playing');
//         })
//     })
//  }  

//  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         console.log(e.target);
//         makeallPlay();
//         songIndex=parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         console.log(songIndex);
//         audioElement.src=songs[songIndex].filepath;
//         mastersongname.innerText = songs[songIndex].songName;

//         audioElement.currentTime=0;
//         audioElement.play();
//         masterplay.classList.remove('fa-play-circle');
//         masterplay.classList.add('fa-pause-circle'); 
         
//     })
//  })

// document.getElementById('next').addEventListener('click',()=>{
//     if(songIndex>=9){
//         songIndex=0;
//     }
//     else{
//         songIndex+=1;
//     }
//     audioElement.src=songs[songIndex].filepath;
//     mastersongname.innerText=songs[songIndex].songName;
//     audioElement.currentTime=0;
//     audioElement.play();
//     masterplay.classList.remove('fa-play-circle');
//     masterplay.classList.add('fa-pause-circle');
//     makeallPlay();
//     document.getElementById(songIndex).classList.remove('fa-play-circle');
//     document.getElementById(songIndex).classList.add('fa-pause-circle');
    
    
// })

// document.getElementById('previous').addEventListener('click',()=>{
//     if(songIndex<=0){
//         songIndex=9;
//     }
//     else{
//         songIndex-=1;
//     }
//     audioElement.src=songs[songIndex].filepath;
//     mastersongname.innerText=songs[songIndex].songName;
//     audioElement.currentTime=0;
//     audioElement.play();
//     masterplay.classList.remove('fa-play-circle');
//     masterplay.classList.add('fa-pause-circle');
//     makeallPlay();
//     document.getElementById(songIndex).classList.remove('fa-play-circle');
//     document.getElementById(songIndex).classList.add('fa-pause-circle');
//     const currentSong = this.closest('.songItems');
//         if (currentSong) {
//             currentSong.classList.add('playing');
//         }
// })



// playIcons.forEach(icon => {
//     icon.addEventListener('click', function(event) {
//         // Optional: Prevent the event from bubbling up if you have nested clickable elements
//         event.stopPropagation();
        
//         // Remove the 'playing' class from all songItems
//         document.querySelectorAll('.songItems').forEach(item => {
//             item.classList.remove('playing');
//         });
        
//         // Find the closest parent with the class 'songItems' and add the 'playing' class to it
//         const currentSong = this.closest('.songItems');
//         if (currentSong) {
//             currentSong.classList.add('playing');
//         }
        
//         // You can also add additional logic here to actually play the song

//     });
// });


function makeallPlay() {
    // Remove 'playing' class from all songs
    document.querySelectorAll('.songItems').forEach(song => {
        song.classList.remove('playing');
    });

    // Reset all play buttons to 'play' icon
    document.querySelectorAll('.songItemPlay').forEach(icon => {
        icon.classList.remove('fa-pause-circle');
        icon.classList.add('fa-play-circle');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeallPlay();  // Reset all songs before playing a new one

        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        console.log(songIndex);
        audioElement.src = songs[songIndex].filepath;
        mastersongname.innerText = songs[songIndex].songName;

        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle'); 

        // Highlight the currently playing song
        document.getElementById(songIndex).closest('.songItems').classList.add('playing');
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    playCurrentSong();
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    } else {
        songIndex -= 1;
    }
    playCurrentSong();
});

// Function to play the current song and highlight it
function playCurrentSong() {
    audioElement.src = songs[songIndex].filepath;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

    makeallPlay(); // Reset all highlights
    document.getElementById(songIndex).classList.remove('fa-play-circle');
    document.getElementById(songIndex).classList.add('fa-pause-circle');

    // Highlight the currently playing song
    document.getElementById(songIndex).closest('.songItems').classList.add('playing');
}
