const notesContainer = document.getElementsByClassName("notesContainer")[0];
const newNoteContainer = document.getElementsByClassName("newNoteContainer")[0];
const checkIconElement = document.getElementById("check-icon");
const xIconElement = document.getElementById("x-icon");
const newNoteButtonElement = document.getElementById("newNoteButton");
const noteTextElement = document.getElementById("note-text");
let i = 0;

newNoteButtonElement.addEventListener("click", function () {
  typeNote();
});

function typeNote() {
  console.log(newNoteContainer.style.display);
  if (newNoteContainer.classList.contains("newNoteContainerDisplay")) {
    newNoteContainer.classList.remove("newNoteContainerDisplay");
  } else {
    newNoteContainer.classList.add("newNoteContainerDisplay");
  }
}

checkIconElement.addEventListener("click", function () {
  createNote();
});

xIconElement.addEventListener("click", function () {
  closeWindow();
});

function closeWindow() {
  newNoteContainer.classList.add("newNoteContainerDisplay");
}

function createNote() {
  let noteContent = noteTextElement.value;
  let noteContainerDiv = document.createElement("div");
  noteContainerDiv.classList.add("note");
  let headerNode = document.createElement("h1");
  headerNode.innerHTML += noteContent;
  noteContainerDiv.appendChild(headerNode);

  noteContainerDiv.style.background = color();
  noteContainerDiv.style.margin = margin();
  noteContainerDiv.style.transform = rotate();

  if (noteContent.length) {
    notesContainer.appendChild(noteContainerDiv);
  }

  let transformValue;
  noteContainerDiv.addEventListener("mouseenter", function () {
    transformValue = noteContainerDiv.style.transform;
    noteContainerDiv.style.transform += "scale(1.1)";
    noteContainerDiv.style.transition = "all 0.3s ease-in";
  });

  noteContainerDiv.addEventListener("mouseleave", function () {
    noteContainerDiv.style.transform = transformValue;
    noteContainerDiv.style.transition = "all 0.3s ease-in";
  });

  noteContainerDiv.addEventListener("dblclick", function () {
    noteContainerDiv.remove();
  });
  noteTextElement.value = "";
}

function margin() {
  let random_margin = ["-5px", "4px", "8px", "10px", "15px", "20px"];
  return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate() {
  let random_rotate = [
    "rotate(3deg)",
    "rotate(-4deg)",
    "rotate(-10deg)",
    "rotate(3deg)",
    "rotate(-5deg)",
    "rotate(10deg)",
  ];
  return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color() {
  let random_color = [
    "#fcba03",
    "#bcfc53",
    "#f58eeb",
    "#ff6380",
    "#ddff63",
    "#92f9fc",
  ];
  if (i > random_color.length - 1) {
    i = 0;
  }
  return random_color[i++];
}
