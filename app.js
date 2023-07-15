let box = document.querySelector(".box");
let startBtn = document.querySelector(".start");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

const r = { x: 330, y: 250, w: 40, h: 40, dx: 3, dy: 3, ani: {}, speed: 1, move: false };
const s = { x: 50, y: 40, w: 40, h: 40, dx: 3, dy: 3, ani: {}, speed: 1, move: false };
const p = { x: 120, y: 25, w: 40, h: 40, dx: 3, dy: 3, ani: {}, speed: 1, move: false };

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
function kontrolEt() {
  const kirmizi = rock.getBoundingClientRect();
  const sari = paper.getBoundingClientRect();
  const mavi = scissors.getBoundingClientRect();

  // kirmizi sariya dönüyor
  if (
    kirmizi.right >= sari.left &&
    kirmizi.left <= sari.right &&
    kirmizi.bottom >= sari.top &&
    kirmizi.top <= sari.bottom &&
    rock.style.backgroundColor == "red"
    &&
    paper.style.backgroundColor == "yellow"

  ) {
    rock.style.backgroundColor = "yellow";
  }
 
  //karşılaştığında paper mavi ise rock kırmızı ise = rockı kırmızı yap
  if (
    kirmizi.right >= sari.left &&
    kirmizi.left <= sari.right &&
    kirmizi.bottom >= sari.top &&
    kirmizi.top <= sari.bottom && 
    paper.style.backgroundColor == "blue" &&
    rock.style.backgroundColor == "red"
  ) {
    paper.style.backgroundColor = "red";
  }
 
  //karşılaştığında rock sarı ise paper mavi ise = rackı mavi yap
  if (
    kirmizi.right >= sari.left &&
    kirmizi.left <= sari.right &&
    kirmizi.bottom >= sari.top &&
    kirmizi.top <= sari.bottom && 
    rock.style.backgroundColor == "yellow" &&
    paper.style.backgroundColor == "blue"
  ) {
    rock.style.backgroundColor = "blue";
  }


  if (
    kirmizi.right >= mavi.left &&
    kirmizi.left <= mavi.right &&
    kirmizi.bottom >= mavi.top &&
    kirmizi.top <= mavi.bottom && 
    rock.style.backgroundColor == "yellow" &&
    scissors.style.backgroundColor == "blue"
  ) {
    rock.style.backgroundColor = "blue";
  }

  if (
    kirmizi.right >= sari.left &&
    kirmizi.left <= sari.right &&
    kirmizi.bottom >= sari.top &&
    kirmizi.top <= sari.bottom && 
    rock.style.backgroundColor == "blue" &&
    paper.style.backgroundColor == "yellow"
  ) {
    paper.style.backgroundColor = "blue";
  }

  
  if (
    mavi.right >= sari.left &&
    mavi.left <= sari.right &&
    mavi.bottom >= sari.top &&
    mavi.top <= sari.bottom && 
    scissors.style.backgroundColor == "blue" &&
    paper.style.backgroundColor == "yellow"
  ) {
    paper.style.backgroundColor = "blue";
  }

  if (
    mavi.right >= sari.left &&
    mavi.left <= sari.right &&
    mavi.bottom >= sari.top &&
    mavi.top <= sari.bottom && 
    scissors.style.backgroundColor == "red" &&
    paper.style.backgroundColor == "blue"
  ) {
    paper.style.backgroundColor = "red";
  }
  
  if (
    kirmizi.right >= mavi.left &&
    kirmizi.left <= mavi.right &&
    kirmizi.bottom >= mavi.top &&
    kirmizi.top <= mavi.bottom && 
    rock.style.backgroundColor == "red" &&
    scissors.style.backgroundColor == "blue"
  ) {
    scissors.style.backgroundColor = "red";
  }

/*
  if (
    // sarı maviye
    // makas > kağıt
    sari.right >= mavi.left &&
    sari.left <= mavi.right &&
    sari.bottom >= mavi.top &&
    sari.top <= mavi.bottom
  ) {
    paper.style.backgroundColor = "blue";
  }

  //mavi kırmızıya
  // taş > makas
  if (
    mavi.right >= kirmizi.left &&
    mavi.left <= kirmizi.right &&
    mavi.bottom >= kirmizi.top &&
    mavi.top <= kirmizi.bottom
  ) {
    scissors.style.backgroundColor = "red";
  }
*/

}


startBtn.addEventListener("click", () => {
  if (!r.move) {
    r.ani = requestAnimationFrame(moveRock);
    s.ani = requestAnimationFrame(moveScissors);
    p.ani = requestAnimationFrame(movePaper);

    r.move = true;
    p.move = true;



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
    r.ani = requestAnimationFrame(moveRock);
  }
  kontrolEt()
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
    p.ani = requestAnimationFrame(moveScissors);
  }
  kontrolEt()
};


// RANGE degil RENGE göre karşılatrıma yapsın.


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
    p.ani = requestAnimationFrame(movePaper);
  }
  kontrolEt()
};

