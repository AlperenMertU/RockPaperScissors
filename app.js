let box = document.querySelector(".box");
let startBtn = document.querySelector(".start");

function  setRandom() {
  const min = 10;
  const max = 320;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let rndNmbr = setRandom();
let rndNmbr1 = setRandom()
let rndNmbr2 = setRandom()
 console.log(rndNmbr1,rndNmbr, rndNmbr2);
const objects = [
  { id: "rock", x: rndNmbr, y: rndNmbr + 50, w:25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "paper", x: rndNmbr1, y: rndNmbr1, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "scissors", x: rndNmbr2, y: rndNmbr2 , w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
];






objects.forEach((data) => {
  console.log(data);
  let div = document.createElement("img");
  div.id = data.id;
  div.src = `/assets/${data.id}.png`;
  div.style.left = `${data.x}px`;
  div.style.top = `${data.y}px`;
  div.style.width = `${data.w}px`;
  div.style.height = `${data.h}px`;
  div.style.position = "absolute";
  box.appendChild(div);
});

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

function check() {

  const kirmizi = rock.getBoundingClientRect();
  const sari = paper.getBoundingClientRect();
  const mavi = scissors.getBoundingClientRect();

  // kirmizi sariya dönüyor
  if (
    kirmizi.right >= sari.left &&
    kirmizi.left <= sari.right &&
    kirmizi.bottom >= sari.top &&
    kirmizi.top <= sari.bottom &&
    paper.src === "http://127.0.0.1:5500/assets/paper.png" &&
    rock.src === "http://127.0.0.1:5500/assets/rock.png" 

    //değdikleri zaman resim değişiyyor benim serc kotrolünü yapmam lazım
   

  ) {   
     rock.src = "/assets/paper.png"
  }
 
  //karşılaştığında paper mavi ise rock kırmızı ise = rockı kırmızı yap
  if (
    kirmizi.right >= sari.left &&
    kirmizi.left <= sari.right &&
    kirmizi.bottom >= sari.top &&
    kirmizi.top <= sari.bottom && 
    paper.src == "http://127.0.0.1:5500/assets/scissors.png" &&
    rock.src == "http://127.0.0.1:5500/assets/rock.png"
  ) {
    paper.src = "http://127.0.0.1:5500/assets/rock.png";
  }
 
  //karşılaştığında rock sarı ise paper mavi ise = rackı mavi yap
  if (
    kirmizi.right >= sari.left &&
    kirmizi.left <= sari.right &&
    kirmizi.bottom >= sari.top &&
    kirmizi.top <= sari.bottom && 
    rock.src == "http://127.0.0.1:5500/assets/paper.png" &&
    paper.src == "http://127.0.0.1:5500/assets/scissors.png"
  ) {
    rock.src = "http://127.0.0.1:5500/assets/scissors.png";
  }


  if (
    kirmizi.right >= mavi.left &&
    kirmizi.left <= mavi.right &&
    kirmizi.bottom >= mavi.top &&
    kirmizi.top <= mavi.bottom && 
    rock.src == "http://127.0.0.1:5500/assets/paper.png" &&
    scissors.src == "http://127.0.0.1:5500/assets/scissors.png"
  ) {
    rock.src = "http://127.0.0.1:5500/assets/scissors.png";
  }

  if (
    kirmizi.right >= sari.left &&
    kirmizi.left <= sari.right &&
    kirmizi.bottom >= sari.top &&
    kirmizi.top <= sari.bottom && 
    rock.src == "http://127.0.0.1:5500/assets/scissors.png" &&
    paper.src == "http://127.0.0.1:5500/assets/paper.png"
  ) {
    paper.src = "http://127.0.0.1:5500/assets/scissors.png";
  }
/////
  

  if (
    mavi.right >= sari.left &&
    mavi.left <= sari.right &&
    mavi.bottom >= sari.top &&
    mavi.top <= sari.bottom && 
    scissors.src == "http://127.0.0.1:5500/assets/scissors.png" &&
    paper.src == "http://127.0.0.1:5500/assets/paper.png"
  ) {
    paper.src = "http://127.0.0.1:5500/assets/scissors.png";
  }


  ////
  if (
    mavi.right >= sari.left &&
    mavi.left <= sari.right &&
    mavi.bottom >= sari.top &&
    mavi.top <= sari.bottom && 
    scissors.src == "http://127.0.0.1:5500/assets/rock.png" &&
    paper.src == "http://127.0.0.1:5500/assets/scissors.png"
  ) {
    paper.src = "http://127.0.0.1:5500/assets/rock.png";
  }

  if (
    mavi.right >= sari.left &&
    mavi.left <= sari.right &&
    mavi.bottom >= sari.top &&
    mavi.top <= sari.bottom && 
    scissors.src == "http://127.0.0.1:5500/assets/rock.png" &&
    paper.src == "http://127.0.0.1:5500/assets/paper.png"
  ) {
    scissors.src = "http://127.0.0.1:5500/assets/paper.png";
  }
  
  if (
    kirmizi.right >= mavi.left &&
    kirmizi.left <= mavi.right &&
    kirmizi.bottom >= mavi.top &&
    kirmizi.top <= mavi.bottom && 
    rock.src == "http://127.0.0.1:5500/assets/rock.png" &&
    scissors.src == "http://127.0.0.1:5500/assets/scissors.png"
  ) {
    scissors.src = "http://127.0.0.1:5500/assets/rock.png";
  }

  if (
    kirmizi.right >= mavi.left &&
    kirmizi.left <= mavi.right &&
    kirmizi.bottom >= mavi.top &&
    kirmizi.top <= mavi.bottom && 
    rock.src == "http://127.0.0.1:5500/assets/rock.png" &&
    scissors.src == "http://127.0.0.1:5500/assets/paper.png"
  ) {
    rock.src = "http://127.0.0.1:5500/assets/paper.png";
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
  check();
}

///////////////













