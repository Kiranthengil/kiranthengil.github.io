// Example data structure: projects and their videos
const videosBySubject = {
  "Project 1": [
    { title: "What is Single Layer QAOA?", id: "brvUuIOOQdg" },
    { title: "What is Single Layer QAOA?", id: "brvUuIOOQdg" }
  ],
  "Project 2": [],
  "Project 3": []
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
    div.onclick = () => playVideo(video.id, true);
    videoListDiv.appendChild(div);

    // Auto-play the first video
    if (index === 0) {
      playVideo(video.id, true);
    }
  });
}

// Play a selected video (with autoplay option)
function playVideo(videoId, autoplay = false) {
  let url = "https://www.youtube.com/embed/" + videoId;
  if (autoplay) {
    url += "?autoplay=1&mute=1"; 
    // note: 'mute=1' is needed because most browsers block auto-playing sound
  }
  videoFrame.src = url;
}
