// Example data structure: projects and their videos
const videosBySubject = {
  "Project 1": [
    { title: "Intro to Project 1", id: "QvXbR6qPVpo" },
    { title: "Deep Dive - Project 1", id: "9C_HReR_McQ" }
  ],
  "Project 2": [
    { title: "Overview of Project 2", id: "e-P5IFTqB98" },
    { title: "Details - Project 2", id: "JhHMJCUmq28" }
  ],
  "Project 3": [
    { title: "Introduction - Project 3", id: "t3217H8JppI" },
    { title: "Case Study - Project 3", id: "3JZ_D3ELwOQ" }
  ]
};

const subjectsDiv = document.getElementById("subjects");
const videoListDiv = document.getElementById("video-list");
const videoFrame = document.getElementById("video-frame");
let activeButton = null;

// Create subject buttons
Object.keys(videosBySubject).forEach(subject => {
  const btn = document.createElement("button");
  btn.innerText = subject;
  btn.className = "subject-btn";
  btn.onclick = () => {
    if (activeButton) activeButton.classList.remove("active");
    btn.classList.add("active");
    activeButton = btn;
    loadVideos(subject);
  };
  subjectsDiv.appendChild(btn);
});

// Load videos for selected subject
function loadVideos(subject) {
  videoListDiv.innerHTML = ""; // clear old list
  const videos = videosBySubject[subject];

  videos.forEach((video, index) => {
    const div = document.createElement("div");
    div.className = "video-title";
    div.innerText = video.title;
    div.onclick = () => playVideo(video.id);
    videoListDiv.appendChild(div);

    // Auto-play the first video
    if (index === 0) {
      playVideo(video.id);
    }
  });
}

// Play a selected video
function playVideo(videoId) {
  videoFrame.src = "https://www.youtube.com/embed/" + videoId;
}
