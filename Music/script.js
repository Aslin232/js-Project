const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const shuffleBtn = document.getElementById("shuffle");
const repeatBtn = document.getElementById("repeat");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const volumeControl = document.getElementById("volume");
const muteBtn = document.getElementById("mute");
const playlistEl = document.getElementById("playlist");

let songs = [
  { title: "Song 1", src: "music/song1.mp3" },
  { title: "Song 2", src: "music/song2.mp3" },
  { title: "Song 3", src: "music/song3.mp3" },
];

let currentSongIndex = 0;
let isShuffle = false;
let isRepeat = false;
let isMuted = false;

function loadSong(song) {
  audio.src = song.src;
  audio.load();
}

function playSong() {
  audio.play();
  playBtn.innerHTML = "⏸️";
}

function pauseSong() {
  audio.pause();
  playBtn.innerHTML = "▶️";
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(songs[currentSongIndex]);
  playSong();
}

function nextSong() {
  if (isShuffle) {
    currentSongIndex = Math.floor(Math.random() * songs.length);
  } else {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  }
  loadSong(songs[currentSongIndex]);
  playSong();
}

function toggleShuffle() {
  isShuffle = !isShuffle;
  shuffleBtn.style.color = isShuffle ? "limegreen" : "white";
}

function toggleRepeat() {
  isRepeat = !isRepeat;
  repeatBtn.style.color = isRepeat ? "limegreen" : "white";
}

function updateProgress() {
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100;

    let currentMinutes = Math.floor(audio.currentTime / 60);
    let currentSeconds = Math.floor(audio.currentTime % 60);
    let durationMinutes = Math.floor(audio.duration / 60);
    let durationSeconds = Math.floor(audio.duration % 60);

    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds
      .toString()
      .padStart(2, "0")}`;
    durationEl.textContent = `${durationMinutes}:${durationSeconds
      .toString()
      .padStart(2, "0")}`;
  }
}

function setProgress() {
  audio.currentTime = (progress.value / 100) * audio.duration;
}

function setVolume() {
  audio.volume = volumeControl.value;
}

function toggleMute() {
  isMuted = !isMuted;
  audio.muted = isMuted;
  muteBtn.innerHTML = isMuted ? "🔇" : "🔊";
}

function loadPlaylist() {
  playlistEl.innerHTML = "";
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong(song);
      playSong();
    });
    playlistEl.appendChild(li);
  });
}

// Event listeners
playBtn.addEventListener("click", () =>
  audio.paused ? playSong() : pauseSong()
);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
shuffleBtn.addEventListener("click", toggleShuffle);
repeatBtn.addEventListener("click", toggleRepeat);
audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", () => {
  if (isRepeat) {
    playSong();
  } else {
    nextSong();
  }
});
progress.addEventListener("input", setProgress);
volumeControl.addEventListener("input", setVolume);
muteBtn.addEventListener("click", toggleMute);

// Init
loadSong(songs[currentSongIndex]);
loadPlaylist();
