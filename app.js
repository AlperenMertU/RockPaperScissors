let box = document.querySelector(".box");
let startBtn = document.querySelector(".start");


const objects = [
  { id: "rock", x: 330, y: 250, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "scissors", x: 250, y: 40, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "paper", x: 120, y: 25, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },

  { id: "rock1", x: 30, y: 250, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "scissors1", x: 66, y: 80, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "paper1", x: 12, y: 65, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },

  { id: "rock2", x: 360, y: 120, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "scissors2", x: 260, y: 340, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "paper2", x: 550, y: 100, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
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
  box.appendChild(div);
});

objects.forEach((item) => {
  document.getElementById(`${item.id}`).style.position = "absolute"
})




startBtn.addEventListener("click", () => {
  if (!objects[0].move) {
    objects.forEach((obj) => {
      obj.ani = requestAnimationFrame(moveObject.bind(null, obj));
      obj.move = true;
    })
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
