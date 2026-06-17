
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const footer = document.getElementById("footer");

let yesClicks = 0;       
const EXIT_AFTER = 6;    
let noScale = 1;         

const yesLabels = ["Yes", "yes?", "y-yes..", "yes plz", "...sure", "DO IT"];

const footerMessages = [
  "Tip: the correct answer is No.",
  "Are you sure?",
  "Please reconsider.",
  "You really want to leave?",
  "Last chance to stay.",
  "Fine. Exiting...",
];

function relocateYes() {
  yesBtn.classList.add("runaway");

  const w = yesBtn.offsetWidth;
  const h = yesBtn.offsetHeight;
  const maxX = Math.max(0, window.innerWidth - w);
  const maxY = Math.max(0, window.innerHeight - h);

  yesBtn.style.left = Math.random() * maxX + "px";
  yesBtn.style.top = Math.random() * maxY + "px";
}

function growNo() {
  noScale *= 1.4;
  noBtn.style.fontSize = 14 * noScale + "px";
  noBtn.style.padding = 8 * noScale + "px " + 18 * noScale + "px";
}

function shrinkYes() {
  const size = Math.max(9, 14 - yesClicks);
  yesBtn.style.fontSize = size + "px";
}

yesBtn.addEventListener("click", function () {
  yesClicks++;

  question.textContent = "Do you really want to exit? (x" + yesClicks + ")";
  footer.textContent = footerMessages[Math.min(yesClicks, footerMessages.length - 1)];

  growNo();
  shrinkYes();
  yesBtn.textContent = yesLabels[Math.min(yesClicks, yesLabels.length - 1)];
  relocateYes();

  if (yesClicks >= EXIT_AFTER) {
    exitApplication();
  }
});

noBtn.addEventListener("click", function () {
  const msg = document.createElement("div");
  msg.className = "smug";
  msg.textContent = "Glad you decided to stay.";
  document.body.appendChild(msg);

  setTimeout(function () {
    msg.remove();
    resetDialog();
  }, 2000);
});

function resetDialog() {
  yesClicks = 0;
  noScale = 1;

  yesBtn.className = "btn btn-yes";
  yesBtn.textContent = "Yes";
  yesBtn.style.cssText = "";

  noBtn.style.cssText = "";

  question.textContent = "Do you really want to exit the application?";
  footer.textContent = footerMessages[0];
}

function exitApplication() {
  const lines = [
    "> exit confirmed",
    "> closing application...",
    "> goodbye.",
    "",
    "It is now safe to close this tab.",
  ];

  const screen = document.createElement("div");
  screen.className = "shutdown";
  document.body.appendChild(screen);

  let i = 0;
  const interval = setInterval(function () {
    if (i < lines.length) {
      screen.textContent += lines[i] + "\n";
      i++;
    } else {
      clearInterval(interval);
      window.close();
    }
  }, 500);
}
