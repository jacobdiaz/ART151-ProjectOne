let msgId = 0;
let memeId = 10;
let firstMsg = 1;
let duration = 1500; // 1.5s
let ac = setInterval(animateConvo, duration);

function animateConvo() {
  // Hide Memes on load
  document.getElementById(memeId).style.display = "none";
  // Check if last
  if (msgId == 3) {
    displayMemes();
  }
  if (msgId < 3) {
    ++msgId;
    console.log(msgId);
    const element = document.getElementById(msgId);
    document.getElementById(msgId).style.visibility = "visible";
  } else {
    clearInterval(ac);
    return;
  }
}
function displayMemes() {
  setInterval(function() {
    if (memeId < 50) {
      console.log("Displaying a meme: memeID =", memeId);
      document.getElementById(memeId).style.visibility = "visible";
      memeId += 10;
    }
    // When memes are done displaying
    else {
      waitConfirm();
      return;
    }
  }, duration);
}

function waitConfirm() {
  // Wait after memes, bring up dialog box
  setInterval(function() {}, 8000); // 10 seonds
  //    Link to next Page
  if (confirm("Xan with the Lean call it thought juice")) {
    window.location.replace("page4.html");
  }
}
