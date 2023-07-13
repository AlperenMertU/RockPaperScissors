let box = document.querySelector(".box");
let startBtn = document.querySelector(".start");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");

const r = { x: 520, y: 224, w: 40, h: 40, dx: 3, dy: 3, ani: {}, speed:1, move: false };
const p = { x: 200, y: 14, w: 40, h: 40, dx: 3, dy: 3, ani: {}, speed:2, move: false };
const s = { x: 400, y: 124, w: 40, h: 40, dx: 3, dy: 3, ani: {}, speed:2, move: false };

rock.style.left = `44px`
rock.style.top = `44px`




/*
mavi - taş 
sarı - kağıt
kırmızı - makas

mavi>kırmızı
kırmızı>sarı
sarı>mavi
*/

//sorunlardan birisi renk değişim olayı
function kontrolEt() {
  const blue = rock.getBoundingClientRect();

  if (
    //burda mvi sarıya dönüyor
    blue.left < yellow.right &&
    blue.right > yellow.left &&
    blue.top < yellow.bottom &&
    blue.bottom > yellow.top
  ) {
    rock.style.backgroundColor = 'yellow';
  }

  if (
    //sarı kırmızıya dönüyor
    red.left < yellow.right &&
    red.right > yellow.left &&
    red.top < yellow.bottom &&
    red.bottom > yellow.top
  ) {
    rock.style.backgroundColor = 'red';
  }
}

startBtn.addEventListener("click", () => {
  if (!r.move) {
    r.ani = requestAnimationFrame(moveRock);
    p.ani = requestAnimationFrame(movePaper);
    s.ani = requestAnimationFrame(moveScissors);

    r.move = true;
    p.move = true;
    s.move = true;

  } else {
    cancelAnimationFrame(r.ani);
    cancelAnimationFrame(p.ani);
    cancelAnimationFrame(s.ani);

    r.move = false;
    p.move = false;
    s.move = false;

  }
});

let moveRock = () => {
  if (r.x > 600 - r.w || r.x < 0) {
    r.dx *= -1;
  }
  if (r.y > 400 - r.h || r.y < 0) {
    r.dy *= -1;
  }

  r.x += r.dx * r.speed
  r.y += r.dy * r.speed

  rock.style.left = `${r.x}px`;
  rock.style.top = `${r.y}px`;

  if (r.move) {
    r.ani = requestAnimationFrame(moveRock);
    kontrolEt();
  }
};

let movePaper = () => {
  if (p.x > 600 - p.w || p.x < 0) {
    p.dx *= -1;
  }
  if (p.y > 400 - p.h || p.y < 0) {
    p.dy *= -1;
  }

  p.x += p.dx
  p.y += p.dy;

  paper.style.left = `${p.x}px`;
  paper.style.top = `${p.y}px`;

  if (p.move) {
    p.ani = requestAnimationFrame(movePaper);
  }
};


let moveScissors = () => {
  if (s.x > 600 - s.w || s.x < 0) {
    s.dx *= -1;
  }
  if (s.y > 400 - s.h || s.y < 0) {
    s.dy *= -1;
  }

  s.x += s.dx;
  s.y += s.dy;

  scissors.style.left = `${s.x}px`;
  scissors.style.top = `${s.y}px`;

  if (s.move) {
    s.ani = requestAnimationFrame(moveScissors);
    kontrolEt();
  }
};
