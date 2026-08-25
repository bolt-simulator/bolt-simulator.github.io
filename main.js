const video_container = document.getElementById("main-video-container");
const video = video_container.querySelector("video");
const replay_button = video_container.querySelector(".replay");

video.addEventListener("ended", () => {
    replay_button.style.display = "flex";
});

replay_button.addEventListener("click", () => {
    replay_button.style.display = "none";
    video.currentTime = 0;
    video.play();
});
