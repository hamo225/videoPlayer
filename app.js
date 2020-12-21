// Define the variables you want to work with in the DOM
const video = document.getElementById("video");
const playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");
const prorgressBar = document.getElementById("progressBar");
const timeStamp = document.getElementById("timeStamp");

// play and pause the video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// update play/pause Icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = "<i class='fa fa-play-circle fa-2x'></i> ";
  } else {
    play.innerHTML = "<i class='fa fa-pause-circle fa-2x'></i> ";
  }
}

// Stop the Video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Update the progress Bar and timestamp
function updateProgressBar() {
  prorgressBar.value = (video.currentTime / video.duration) * 100;

  // get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  // get seconds
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  timeStamp.innerHTML = `${mins}: ${seconds}`;
}

// Move the progress Bar to selected spot
function setVideoProgressBar() {
  video.currentTime = (+progressBar.value * video.duration) / 100;
}

// Video Event Listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgressBar);

// Play/Stop Event Listeners
playButton.addEventListener("click", toggleVideoStatus);
stopButton.addEventListener("click", stopVideo);

// Progress Bar Event Listeners
prorgressBar.addEventListener("change", setVideoProgressBar);
