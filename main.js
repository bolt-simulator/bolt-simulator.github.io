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

// Wrap each video with a loading spinner overlay that disappears once playback starts.
document.querySelectorAll("video").forEach((v) => {
    const wrap = document.createElement("div");
    wrap.className = "video-wrap";
    v.parentNode.insertBefore(wrap, v);
    wrap.appendChild(v);

    const spinner = document.createElement("div");
    spinner.className = "video-spinner";
    spinner.innerHTML = '<div class="spinner"></div>';
    wrap.appendChild(spinner);

    const markLoaded = () => wrap.classList.add("is-loaded");
    // Already playable (e.g. cached)?
    if (v.readyState >= 3) markLoaded();
    v.addEventListener("playing", markLoaded);
    v.addEventListener("canplay", markLoaded);
});

// Lazy-play the demo videos: only load/play the ones near the viewport so the
// initial page load isn't downloading all of them at once.
const demo_videos = document.querySelectorAll(".demo-item video");
if ("IntersectionObserver" in window) {
    demo_videos.forEach((v) => v.removeAttribute("autoplay"));
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const v = entry.target;
                if (entry.isIntersecting) {
                    v.play().catch(() => {});
                } else {
                    v.pause();
                }
            });
        },
        { rootMargin: "200px" }
    );
    demo_videos.forEach((v) => io.observe(v));
}
