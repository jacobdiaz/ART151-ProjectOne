let msgId = 0;
let firstMsg = 1;
let duration = 1500; // 1.5s
let id = setInterval(animateConvo, duration);

function animateConvo(numberOfMessages, intervalMin, intervalMax) {
  console.log(numberOfMessages);
  if (msgId < 17) {
    // Hide top message as you are going down the convo
    if (msgId > 6 && msgId < 15) {
      document.getElementById(firstMsg).style.visibility = "hidden";
      document.getElementById(firstMsg).style.display = "none";
      ++firstMsg;
    }
    // Next message and animate.css
    ++msgId;
    console.log(msgId);
    const element = document.getElementById(msgId);
    element.classList.add("animated", "slideInUp", "faster");
    document.getElementById(msgId).style.visibility = "visible";
  } else {
    clearInterval(id);
    return;
  }
}
