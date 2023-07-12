let box = document.querySelector(".box")
let startBtn = document.querySelector(".start")
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
const r = {x:150, y:120, w:40, h:40, dx:5, dy:5, ani:{}, move:false}


box.append(rock)
box.append(paper)


startBtn.addEventListener("click",()=>{
  if (!r.move) {
    r.ani = requestAnimationFrame(mover)
    r.move = true
  }else{
    cancelAnimationFrame(r.ani)
    r.move= false
    }
})
 
let mover = () => {
  if (r.x > 600-r.w || r.x < 0) {
     r.dx *= -1
  }
  if (r.y > 400-r.h || r.y < 0) {
    r.dy *= -1
  }

  r.x += r.dx
  r.y += r.dy
   
  rock.style.left = `${r.x}px`
  rock.style.top = `${r.y}px`
  if (r.move) {
    r.ani = requestAnimationFrame(mover)

  }
}













