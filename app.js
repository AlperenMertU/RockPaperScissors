let box = document.querySelector(".box");
let startBtn = document.querySelector(".start");


const objects = [
  { id: "rock", x: 330, y: 250, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "scissors", x: 220, y: 40, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "paper", x: 120, y: 25, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },




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
  div.style.position = "absolute"
  box.appendChild(div);
});



function kontrolEt() {
  const karsilastirmalar = [
    { item1: "paper", item2: "rock", replacement: "paper" },
    { item1: "paper", item2: "scissors", replacement: "scissors" },
    { item1: "rock", item2: "paper", replacement: "paper" },
    { item1: "rock", item2: "scissors", replacement: "rock" },
    { item1: "scissors", item2: "rock", replacement: "rock" },
    { item1: "scissors", item2: "paper", replacement: "scissors" },

  ];

  karsilastirmalar.forEach(({ item1, item2, replacement }) => {
    const div1 = document.getElementById(item1);//rock
    const div2 = document.getElementById(item2);//paper

    const rect1 = div1.getBoundingClientRect();//rock
    const rect2 = div2.getBoundingClientRect();//paper

    if (
      rect1.right >= rect2.left &&
      rect1.left <= rect2.right &&
      rect1.bottom >= rect2.top &&
      rect1.top <= rect2.bottom &&
      div1.id === item1 &&
      div2.id === item2

    ) {
      div1.id = "paper"
    }



  });
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
