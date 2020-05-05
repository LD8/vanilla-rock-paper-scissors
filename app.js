const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const myScore_span = document.getElementById("myScore");
const computerScore_span = document.getElementById("computerScore");
const status_p = document.getElementById("status");
const tellStatus_p = document.getElementById("tellStatus");
const info_p = document.getElementById("info");

const names = {
  r: "Rock",
  p: "Paper",
  s: "Scissors"
};

let myScore = myScore_span.textContent;
let computerScore = computerScore_span.textContent;

function animateWin() {
  status_p.animate(
    {
      opacity: [1, 0.3, 1],
      transform: ["scale(1)", "scale(2)", "scale(1)"]
    },
    {
      direction: "normal",
      duration: 300,
      iterations: 1
    }
  );
}

function animateLose() {
  status_p.animate(
    {
      opacity: [1, 0.3],
      transform: ["scale(1)", "scale(0.5)", "scale(1)"]
    },
    {
      direction: "alternate",
      duration: 500,
      iterations: 1
    }
  );
}

function computerChoose() {
  return ["r", "p", "s"][Math.floor(Math.random() * 3)];
}

function clearInfo(id) {
  info_p.textContent = `You picked ${id.toUpperCase()}`;
}

function evaluate(cc, uc) {
  switch (cc + uc) {
    case "rr":
    case "pp":
    case "ss":
      draw(cc, uc);
      break;
    case "rp":
    case "ps":
    case "sr":
      win(cc, uc);
      break;
    case "rs":
    case "pr":
    case "sp":
      lose(cc, uc);
      break;
  }
}
function addGlow(uc, glow) {
  userChoice_div = document.getElementById(names[uc].toLowerCase());
  userChoice_div.classList.add(glow);
  setTimeout(() => userChoice_div.classList.remove(glow), 300);
}
function win(cc, uc) {
  myScore++;
  myScore_span.textContent = myScore;
  status_p.textContent = "Yeyy! I won!!";
  tellStatus_p.textContent = `${names[uc]} > ${names[cc]}`;
  animateWin();
  addGlow(uc, "win-glow");
}

function lose(cc, uc) {
  computerScore++;
  computerScore_span.textContent = computerScore;
  status_p.textContent = "Damn! I lost...";
  tellStatus_p.textContent = `${names[uc]} < ${names[cc]}`;
  animateLose();
  addGlow(uc, "lose-glow");
}

function draw(cc, uc) {
  status_p.textContent = "DRAW!";
  tellStatus_p.textContent = `${names[uc]} = ${names[cc]}`;
  userChoice_div = document.getElementById(names[uc].toLowerCase());
  addGlow(uc, "draw-glow");
}

function go(rps) {
  const computerChoice = computerChoose();
  const userChoice = rps;
  evaluate(computerChoice, userChoice);
}

function main() {
  rock_div.addEventListener("click", () => go("r"));
  paper_div.addEventListener("click", () => go("p"));
  scissors_div.addEventListener("click", () => go("s"));
}

main();
