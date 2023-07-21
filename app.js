let box = document.querySelector(".box");
let startBtn = document.querySelector(".start");

const objects = [
  { id: "rock", x: 530, y: 150, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "paper", x: 420, y: 60, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
  { id: "rock1", x: 210, y: 150, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
 // { id: "paper1", x: 210, y: 60, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
 // { id: "scissors1", x: 10, y: 150, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
 // { id: "scissors2", x: 410, y: 160, w: 25, h: 25, dx: 3, dy: 3, ani: {}, speed: 1, move: false },
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



function check() {


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