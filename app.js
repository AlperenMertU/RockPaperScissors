let box = document.querySelector(".box");
let startBtn = document.querySelector(".start");

let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");
let paper = document.getElementById("paper");

const objects = [
  { id: "rock", x: 330, y: 250, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "scissors", x: 250, y: 40, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "paper", x: 120, y: 25, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  
  { id: "rock1", x: 330, y: 250, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "scissors1", x: 250, y: 40, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "paper1", x: 120, y: 25, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  
  { id: "rock2", x: 330, y: 250, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "scissors2", x: 250, y: 40, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "paper2", x: 120, y: 25, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
];

objects.forEach((data) => {
  let div = document.createElement("img");
  div.id = data.id;
  div.src = `/assets/${data.id}.png`;
  div.style.left = `${data.x}px`;
  div.style.top = `${data.y}px`;
  div.style.width = `${data.w}px`;
  div.style.height = `${data.h}px`;
  box.appendChild(div);
});

function kontrolEt() {
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");

  const kirmizi = rock.getBoundingClientRect();
  const sari = paper.getBoundingClientRect();
  const mavi = scissors.getBoundingClientRect();

  if (
    kirmizi.right >= sari.left &&
    kirmizi.left <= sari.right &&
    kirmizi.bottom >= sari.top &&
    kirmizi.top <= sari.bottom &&
    paper.src === "http://127.0.0.1:5500/assets/paper.png" &&
    rock.src === "http://127.0.0.1:5500/assets/rock.png"
  ) {
    rock.src = "/assets/paper.png";
  }

  if (
    kirmizi.right >= sari.left &&
    kirmizi.left <= sari.right &&
    kirmizi.bottom >= sari.top &&
    kirmizi.top <= sari.bottom &&
    paper.src === "http://127.0.0.1:5500/assets/scissors.png" &&
    rock.src === "http://127.0.0.1:5500/assets/rock.png"
  ) {
    paper.src = "http://127.0.0.1:5500/assets/rock.png";
  }

  if (
    kirmizi.right >= sari.left &&
    kirmizi.left <= sari.right &&
    kirmizi.bottom >= sari.top &&
    kirmizi.top <= sari.bottom &&
    rock.src === "http://127.0.0.1:5500/assets/paper.png" &&
    paper.src === "http://127.0.0.1:5500/assets/scissors.png"
  ) {
    rock.src = "http://127.0.0.1:5500/assets/scissors.png";
  }

  if (
    kirmizi.right >= mavi.left &&
    kirmizi.left <= mavi.right &&
    kirmizi.bottom >= mavi.top &&
    kirmizi.top <= mavi.bottom &&
    rock.src === "http://127.0.0.1:5500/assets/paper.png" &&
    scissors.src === "http://127.0.0.1:5500/assets/scissors.png"
  ) {
    rock.src = "http://127.0.0.1:5500/assets/scissors.png";
  }

  if (
    kirmizi.right >= sari.left &&
    kirmizi.left <= sari.right &&
    kirmizi.bottom >= sari.top &&
    kirmizi.top <= sari.bottom &&
    rock.src === "http://127.0.0.1:5500/assets/scissors.png" &&
    paper.src === "http://127.0.0.1:5500/assets/paper.png"
  ) {
    paper.src = "http://127.0.0.1:5500/assets/scissors.png";
  }

  if (
    mavi.right >= sari.left &&
    mavi.left <= sari.right &&
    mavi.bottom >= sari.top &&
    mavi.top <= sari.bottom &&
    scissors.src === "http://127.0.0.1:5500/assets/scissors.png" &&
    paper.src === "http://127.0.0.1:5500/assets/paper.png"
  ) {
    paper.src = "http://127.0.0.1:5500/assets/scissors.png";
  }

  if (
    mavi.right >= sari.left &&
    mavi.left <= sari.right &&
    mavi.bottom >= sari.top &&
    mavi.top <= sari.bottom &&
    scissors.src === "http://127.0.0.1:5500/assets/rock.png" &&
    paper.src === "http://127.0.0.1:5500/assets/scissors.png"
  ) {
    paper.src = "http://127.0.0.1:5500/assets/rock.png";
  }

  if (
    kirmizi.right >= mavi.left &&
    kirmizi.left <= mavi.right &&
    kirmizi.bottom >= mavi.top &&
    kirmizi.top <= mavi.bottom &&
    rock.src === "http://127.0.0.1:5500/assets/rock.png" &&
    scissors.src === "http://127.0.0.1:5500/assets/scissors.png"
  ) {
    scissors.src = "http://127.0.0.1:5500/assets/rock.png";
  }
}

startBtn.addEventListener("click", () => {
  if (!objects[0].move) {
    objects.forEach((obj) => {
      obj.ani = requestAnimationFrame(moveObject.bind(null, obj));
      obj.move = true;
    });
  } else {
    objects.forEach((obj) => {
      cancelAnimationFrame(obj.ani);
      obj.move = false;
    });
  }
});

function moveObject(obj) {
  if (obj.x > 600 - obj.w || obj.x < 0) {
    obj.dx *= -1;
  }
  if (obj.y > 400 - obj.h || obj.y < 0) {
    obj.dy *= -1;
  }

  obj.x += obj.dx * obj.speed;
  obj.y += obj.dy * obj.speed;

  document.getElementById(obj.id).style.left = `${obj.x}px`;
  document.getElementById(obj.id).style.top = `${obj.y}px`;

  if (obj.move) {
    obj.ani = requestAnimationFrame(moveObject.bind(null, obj));
  }

  kontrolEt();
}
