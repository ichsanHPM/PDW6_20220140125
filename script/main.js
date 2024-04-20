// Mengambil elemen video dan audio
const video = document.querySelector('video');
const audio = document.querySelector('audio');

// Membuat fungsi untuk memainkan dan memberhentikan video
function toggleVideoPlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Membuat fungsi untuk memainkan dan memberhentikan audio
function toggleAudioPlay() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

