// ============================
// Talks Section Data
// ============================
const videosBySubject = {
  "Project 1": [
    { title: "What is Single Layer QAOA? (23-08-2025)", id: "brvUuIOOQdg" },
    { title: "Another Talk on QAOA", id: "brvUuIOOQdg" }
  ],
  "Project 2": [],
  "Project 3": []
};

// ============================
// Notes Section Data
// ============================
const notesBySubject = {
  "Project 1": [
    { title: "What is Single-Layer QAOA? (23-08-2025)", link: "https://drive.google.com/file/d/1nCqI3XvID7OHIsp7jGYrv1Rt_vbqBnps/preview" },
    { title: "Additional Material", link: "https://drive.google.com/file/d/your-second-file-id/preview" }
  ],
  "Project 2": [
    { title: "Project 2 Notes", link: "https://drive.google.com/file/d/your-project2-file-id/preview" }
  ],
  "Project 3": []
};

// ============================
// Latest Publications Data
// ============================
const latestpubBySubject = {
  "Latest Publications": [
    { title: "Digital controllability of transverse field Ising chains (ArXiv version)", link: "https://arxiv.org/pdf/2509.17754.pdf" },
    { title: "From Exponential to Quadratic: Optimal Control for a Frustrated Ising Ring Model (QST 2025)", link: "https://arxiv.org/pdf/2502.17015.pdf" }
  ]
};

// ============================
// DOM Elements
// ============================
const talksSubjectsDiv = document.getElementById("subjects-talks");
const videoListDiv = document.getElementById("video-list");
const videoFrame = document.getElementById("video-frame");

const notesSubjectsDiv = document.getElementById("subjects-notes");
const notesListDiv = document.getElementById("notes-list");
const pdfFrame = document.getElementById("pdf-frame");

const latestpubSubjectsDiv = document.getElementById("subjects-latest");
const latestpubListDiv = document.getElementById("latest-list");
const latestpubpdfFrame = document.getElementById("latest-pdf-frame");

let activeTalkButton = null;
let activeNotesButton = null;
let activeLatestButton = null;
let currentPlaying = null;
let currentNote = null;
let currentLatest = null;

// ============================
// Talks Section
// ============================
Object.keys(videosBySubject).forEach((subject, idx) => {
  const btn = document.createElement("button");
  btn.innerText = subject;
  btn.className = "subject-btn";
  btn.onclick = () => {
    if (activeTalkButton) activeTalkButton.classList.remove("active");
    btn.classList.add("active");
    activeTalkButton = btn;
    loadVideos(subject);
  };
  talksSubjectsDiv.appendChild(btn);

  if (idx === 0) {
    btn.classList.add("active");
    activeTalkButton = btn;
    loadVideos(subject);
  }
});

function loadVideos(subject) {
  videoListDiv.innerHTML = "";
  const videos = videosBySubject[subject];

  videos.forEach((video, index) => {
    const div = document.createElement("div");
    div.className = "video-title";
    div.innerText = video.title;
    div.onclick = () => playVideo(video.id, div, true);
    videoListDiv.appendChild(div);

    if (index === 0) {
      playVideo(video.id, div, true);
    }
  });
}

function playVideo(videoId, titleElement, autoplay = false) {
  let url = "https://www.youtube.com/embed/" + videoId;
  if (autoplay) {
    url += "?autoplay=1&mute=1";
  }
  videoFrame.src = url;

  if (currentPlaying) currentPlaying.classList.remove("playing");
  if (titleElement) {
    titleElement.classList.add("playing");
    currentPlaying = titleElement;
  }
}

// ============================
// Notes Section
// ============================
Object.keys(notesBySubject).forEach((subject, idx) => {
  const btn = document.createElement("button");
  btn.innerText = subject;
  btn.className = "subject-btn";
  btn.onclick = () => {
    if (activeNotesButton) activeNotesButton.classList.remove("active");
    btn.classList.add("active");
    activeNotesButton = btn;
    loadNotes(subject);
  };
  notesSubjectsDiv.appendChild(btn);

  if (idx === 0) {
    btn.classList.add("active");
    activeNotesButton = btn;
    loadNotes(subject);
  }
});

function loadNotes(subject) {
  notesListDiv.innerHTML = "";
  const notes = notesBySubject[subject];

  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note-title";
    div.innerText = note.title;
    div.onclick = () => openNotePDF(note.link, div);
    notesListDiv.appendChild(div);

    if (index === 0) {
      openNotePDF(note.link, div);
    }
  });
}

function openNotePDF(link, noteElement) {
  pdfFrame.src = link;

  if (currentNote) currentNote.classList.remove("playing");
  if (noteElement) {
    noteElement.classList.add("playing");
    currentNote = noteElement;
  }
}

// ============================
// Latest Publications Section
// ============================
Object.keys(latestpubBySubject).forEach((subject, idx) => {
  const btn = document.createElement("button");
  btn.innerText = subject;
  btn.className = "subject-btn";
  btn.onclick = () => {
    if (activeLatestButton) activeLatestButton.classList.remove("active");
    btn.classList.add("active");
    activeLatestButton = btn;
    loadLatest(subject);
  };
  latestpubSubjectsDiv.appendChild(btn);

  if (idx === 0) {
    btn.classList.add("active");
    activeLatestButton = btn;
    loadLatest(subject);
  }
});

function loadLatest(subject) {
  latestpubListDiv.innerHTML = "";
  const latestpubs = latestpubBySubject[subject];

  latestpubs.forEach((latestpub, index) => {
    const div = document.createElement("div");
    div.className = "note-title";
    div.innerText = latestpub.title;
    div.onclick = () => openLatestPDF(latestpub.link, div);
    latestpubListDiv.appendChild(div);

    if (index === 0) {
      openLatestPDF(latestpub.link, div);
    }
  });
}

function openLatestPDF(link, latestpubElement) {
  latestpubpdfFrame.src = link;

  if (currentLatest) currentLatest.classList.remove("playing");
  if (latestpubElement) {
    latestpubElement.classList.add("playing");
    currentLatest = latestpubElement;
  }
}
