// Elements
const playBtn = document.querySelector('#play-button');
const progress = document.querySelector('#progress');
const songList = document.querySelector('#song-options');
const forward=document.querySelector('#forward')
const backward=document.querySelector('#backward')

// Songs array with actual file names
const songs = [
    { name: 'The Night We Met', file: 'The Night We Met.mp3', id: 1 },
    { name: 'Time in a Bottle', file: 'Time in a Bottle.mp3', id: 2 },
    { name: 'Zara-sa', file: 'Zara-sa.mp3', id: 3 }
];

// Create audio element
const audio = new Audio();
let currentSong = null;

// Populate song list
for (let song of songs) {
    const li = document.createElement('li');
    li.innerText = song.name;
    li.setAttribute('id', song.id);
    li.style.cursor = 'pointer';
    songList.appendChild(li);

    // Click on song to play
    li.addEventListener('click', function() {
        currentSong = song;
        audio.src = `./assets/${song.file}`;
        audio.currentTime = 0;
        audio.play();

        // Update play/pause icon
        playBtn.children[0].classList.remove('fa-circle-play');
        playBtn.children[0].classList.add('fa-circle-pause');

        // Highlight selected song
        highlightSong(song.id);
    });
}

// Highlight the currently playing song
function highlightSong(songId) {
    const lis = songList.querySelectorAll('li');
    lis.forEach(li => {
        li.style.backgroundColor = li.id == songId ? '#ddd' : 'transparent';
    });
}

// Play/pause toggle
playBtn.addEventListener('click', function() {
    if (!audio.src) return; // no song loaded yet

    if (audio.paused) {
        audio.play();
        playBtn.children[0].classList.remove('fa-circle-play');
        playBtn.children[0].classList.add('fa-circle-pause');
    } else {
        audio.pause();
        playBtn.children[0].classList.remove('fa-circle-pause');
        playBtn.children[0].classList.add('fa-circle-play');
    }
});

// Update progress bar as song plays
audio.addEventListener('timeupdate', function() {
    if (audio.duration) {
        progress.value = (audio.currentTime / audio.duration) * 100;
    }
});

// Seek functionality
progress.addEventListener('input', function() {
    if (audio.duration) {
        audio.currentTime = (progress.value / 100) * audio.duration;
    }
});

// Reset play button when song ends
audio.addEventListener('ended', function() {
    playBtn.children[0].classList.remove('fa-circle-pause');
    playBtn.children[0].classList.add('fa-circle-play');
});


// Helper function to play a song by index
function playSongByIndex(index) {
    if (index < 0 || index >= songs.length) return;
    currentSong = songs[index];
    audio.src = `./assets/${currentSong.file}`;
    audio.currentTime = 0;
    audio.play();

    // Update play button icon
    playBtn.children[0].classList.remove('fa-circle-play');
    playBtn.children[0].classList.add('fa-circle-pause');

    highlightSong(currentSong.id);
}

// Forward button
forward.addEventListener('click', function() {
    if (!currentSong) return;
    let currentIndex = songs.findIndex(s => s.id === currentSong.id);
    let nextIndex = (currentIndex + 1) % songs.length; // loop to start
    playSongByIndex(nextIndex);
});

// Backward button
backward.addEventListener('click', function() {
    if (!currentSong) return;
    let currentIndex = songs.findIndex(s => s.id === currentSong.id);
    let prevIndex = (currentIndex - 1 + songs.length) % songs.length; // loop to end
    playSongByIndex(prevIndex);
});



