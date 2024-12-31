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
});

function playSound(soundId) { 
  var audio = document.getElementById(soundId); audio.play(); }

