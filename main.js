let submitBtn = document.querySelector(".submit-btn"),
  firstinput = document.querySelector(".email-input"),
  secondinput = document.querySelector(".pass-input");

submitBtn.addEventListener("click", (_) => {
  if (firstinput.value.length > 0 && secondinput.value.length > 0) {
    playVideo();
  }
});

function playVideo() {
  let container = document.querySelector(".container");
  container.remove();
  let vid = document.querySelector(".video");
  vid.style.display = "block";
  vid.play();
}
