// Example data structure: subjects and their videos
const videosBySubject = {
  Math: [
    { title: "Khan Academy - Algebra Basics", id: "QvXbR6qPVpo" },
    { title: "Numberphile - Prime Numbers", id: "9C_HReR_McQ" }
  ],
  Science: [
    { title: "NASA - Black Holes Explained", id: "e-P5IFTqB98" },
    { title: "Kurzgesagt - Quantum Computers", id: "JhHMJCUmq28" }
  ],
  Music: [
    { title: "Beethoven - Symphony No.9", id: "t3217H8JppI" },
    { title: "Coldplay - Viva La Vida", id: "3JZ_D3ELwOQ" }
  ]
};

// Load subject buttons
const subjectsDiv = document.getElementById("subjects");
const videoListDiv = document.getElementById("video-list");
const videoFrame = document.getElementById("video-frame");

Object.keys(videosBySubject).forEach(subject => {
  const btn = document.createElement("button");
  btn.innerText = subject;
  btn.className = "subject-btn";
  btn.onclick = () => loadVideos(subject);
  subjectsDiv.appendChild(btn);
});

// Load videos for selected subject
function loadVideos(subject) {
  videoListDiv.innerHTML = ""; // clear old list
  videosBySubject[subject].forEach(video => {
    const div = document.createElement("div");
    div.className = "video-title";
    div.innerText = video.title;
    div.onclick = () => playVideo(video.id);
    videoListDiv.appendChild(div);
  });
}

// Play a selected video
function playVideo(videoId) {
  videoFrame.src = "https://www.youtube.com/embed/" + videoId;
}
