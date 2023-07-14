let box = document.querySelector(".box");
let startBtn = document.querySelector(".start");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

const r = { x: 150, y: 250, w: 40, h: 40, dx: 3, dy: 3, ani: {}, speed: 5, move: false };
const s = { x: 370, y: 100, w: 40, h: 40, dx: 3, dy: 3, ani: {}, speed: 5, move: false };
const p = { x: 200, y: 14, w: 40, h: 40, dx: 3, dy: 3, ani: {}, speed: 5, move: false };

box.appendChild(rock)
box.appendChild(scissors)
box.appendChild(paper)

rock.style.left = `44px`
rock.style.top = `44px`
rock.style.backgroundColor = "red"
rock.style.width = `${25}px`
rock.style.height = `${25}px`
rock.style.borderRadius = "50%"

scissors.style.left = `454px`
scissors.style.top = `44px`
scissors.style.backgroundColor = "blue"
scissors.style.width = `${25}px`
scissors.style.height = `${25}px`
scissors.style.borderRadius = "50%"

paper.style.left = `122px`
paper.style.top = `44px`
paper.style.backgroundColor = "yellow"
paper.style.width = `${25}px`
paper.style.height = `${25}px`
paper.style.borderRadius = "50%"

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
  const red = rock.getBoundingClientRect();
  const yellow = paper.getBoundingClientRect();
  const blue = scissors.getBoundingClientRect();

  if (
    //krımzızı sarı olacak
    red.left < yellow.right &&
    red.right > yellow.left &&
    red.top < yellow.bottom &&
    red.bottom > yellow.top
  ) {
    rock.style.backgroundColor = 'yellow';
  }

  if (
    //sarı mavi oalcak
    yellow.left < blue.right &&
    yellow.right > blue.left &&
    yellow.top < blue.bottom &&
    yellow.bottom > blue.top
  ) {
    paper.style.backgroundColor = 'blue';
  }


  if (
    //mavi krımızı olacak
    blue.left < red.right &&
    blue.right > red.left &&
    blue.top < red.bottom &&
    blue.bottom > red.top
  ) {
    scissors.style.backgroundColor = 'red';
  }


}

startBtn.addEventListener("click", () => {
  if (!r.move) {
    r.ani = requestAnimationFrame(moveRock);
    s.ani = requestAnimationFrame(moveScissors);
    p.ani = requestAnimationFrame(movePaper);

    r.move = true;
    p.move = true;

    function update() {
      kontrolEt(); // Her zaman renkleri kontrol eder
      requestAnimationFrame(update);
    }

    update(); // İşlem döngüsünü başlatır
  } else {
    cancelAnimationFrame(r.ani);
    cancelAnimationFrame(p.ani);

    r.move = false;
    p.move = false;
  }
});


let moveRock = () => {
  if (r.x > 600 + - r.w || r.x < 0) {
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
    kontrolEt();

    r.ani = requestAnimationFrame(moveRock);
  }
};



let moveScissors = () => {
  if (s.x > 600 + - s.w || s.x < 0) {
    s.dx *= -1;
  }
  if (s.y > 400 - s.h || s.y < 0) {
    s.dy *= -1;
  }

  s.x += s.dx * s.speed
  s.y += s.dy * s.speed

  scissors.style.left = `${s.x}px`;
  scissors.style.top = `${s.y}px`;

  if (p.move) {
    kontrolEt();

    p.ani = requestAnimationFrame(moveScissors);
  }
};



let movePaper = () => {
  if (p.x > 600 - p.w || p.x < 0) {
    p.dx *= -1;
  }
  if (p.y > 400 - p.h || p.y < 0) {
    p.dy *= -1;
  }

  p.x += p.dx * p.speed
  p.y += p.dy * p.speed

  paper.style.left = `${p.x}px`;
  paper.style.top = `${p.y}px`;

  if (p.move) {
    kontrolEt()

    p.ani = requestAnimationFrame(movePaper);
  }
};

