const demos = [["sprint","Sprint"],["curve","Run the Bend"],["hurdles","Hurdles"],["backpedal","Backpedal"],["sideshuffle","Side Shuffle"],["carioca","Carioca"],["hop","One-Legged Hop"],["incline","Incline Run"],["vertical","Vertical Jump"]];
document.getElementById("grid").innerHTML = demos.map(([f, n]) =>
  `<figure><video muted loop playsinline preload="metadata" src="assets/demos/${f}.mp4"></video><figcaption>${n}</figcaption></figure>`).join("");
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause()), { rootMargin: "200px" });
document.querySelectorAll(".grid video").forEach(v => io.observe(v));
