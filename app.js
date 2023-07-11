let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")

setInterval(function() {
    
    var windowWidth = 650
    var windowHeight = 650
    var randomX = Math.floor(Math.random() * (windowWidth - rock.offsetWidth));
    var randomY = Math.floor(Math.random() * (windowHeight - rock.offsetHeight));

  

    rock.style.left = randomX + "px";
    rock.style.top = randomY + "px";
  }, 1000);


  setInterval(function() {
    
    var windowWidth = 650
    var windowHeight = 650
  
    var randomX = Math.floor(Math.random() * (windowWidth - paper.offsetWidth));
    var randomY = Math.floor(Math.random() * (windowHeight - paper.offsetHeight));
     
    paper.style.left = randomX + "px";
    paper.style.top = randomY + "px";  

  }, 1000);

