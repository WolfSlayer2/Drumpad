const buttons = document.querySelectorAll(".button");

for (var i = 0; i < buttons; i++) {

    document.querySelectorAll(".button")[j]
    .addEventListener("click", () =>{
    
      var buttonText = this.innerHTML;
      sound(buttonText);
      animation(buttonText);
    });
  }
    
document.addEventListener("keypress", (event) => {
    sound(event.key);
    animation(event.key);
});

const sound = (key) =>{
    switch(key) {
        case "w":
            var s1 = new Audio("music/w.mp3");
            s1.play();
            break;
        case "a":
            var s2 = new Audio("music/a.mp3");
            s2.play();
            break;
        case "s":
            var s3 = new Audio("music/s.mp3");
            s3.play();
            break;
        case "d":
            var s4 = new Audio("music/d.mp3");
            s4.play();
            break; 
        case "j":
            var s5 = new Audio("music/j.mp3");
            s5.play();
            break;
        case "k":
            var s6 = new Audio("music/k.mp3");
            s6.play();
            break;
        case "l":
            var s7 = new Audio("music/l.mp3");
            s7.play();
            break;  
        default:
            console.log(key);                         
    }
}

const animation = (key) =>{
    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("animation");

    setTimeout(() =>{
       activeButton.classList.remove("animation");
    },100)
}
