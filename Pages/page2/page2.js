let msgId = 0;
let firstMsg = 1;
let duration = 2500; // 1.5s
let id = setInterval(animateConvo, duration);

let img = 99;
function animateConvo() {
  if (msgId < 12) {
    // Hide top message as you are going down the convo
    if (msgId > 5 && msgId < 11) {
      document.getElementById(firstMsg).style.visibility = "hidden";
      document.getElementById(firstMsg).style.display = "none";
      ++firstMsg;
    }
    // Next message and animate.css
    ++msgId;
    console.log(msgId);
    const element = document.getElementById(msgId);
    document.getElementById(msgId).style.visibility = "visible";
  } else {
    clearInterval(id);
    return;
  }
}
var snapNum;
// Snap num opens first snap image and sets the id number to 100
function openSnap() {
  snapNum = 100;
  console.log("Opening Snap");
  document.getElementById(snapNum).style.visibility = "visible";
  console.log(snapNum);
}

function nextSnap() {
  // Check if your on the last snap
  if (snapNum == 500) {
    //   confirm box links to page 3
    if (
      confirm(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
      )
    ) {
      if (confirm("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥")) {
        window.location.replace("/Pages/page3/page3.html");
      }
      window.location.replace("/Pages/page3/page3.html");
    } else {
      if (confirm("consectetur adipiscing elit")) {
        window.location.replace("/Pages/page3/page3.html");
      } else {
        window.location.replace("/Pages/page3/page3.html");
      }
    }

    return;
  }
  var imageUrl = "url(/assets/snapFrom" + snapNum + ".png)";
  console.log(snapNum);
  snapNum += 100;
  // Lets a
  document.getElementById(100).style.backgroundImage = imageUrl;
}
