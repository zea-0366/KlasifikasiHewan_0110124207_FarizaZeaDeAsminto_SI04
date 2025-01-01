alert("Selamat Datang Di Klasifikasi Hewan!!!")

document.addEventListener("DOMContentLoaded", function() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  $(document).ready(function(){
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Selamat Datang di Website Klasifikasi Hewan", "| Created by ", "Fariza Zea De Asminto", "0110124207_SI04"],
        typeSpeed: 100,
        backSpeed: 10,
        loop: true
    });
  });
});



function playSound(soundId) { 
  var audio = document.getElementById(soundId); audio.play(); }
  


