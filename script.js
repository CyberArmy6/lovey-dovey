function revealText() {
  // Hide the name
  document.getElementById("nameBox").style.display = "none";

  // Show the message
  const wishBox = document.getElementById("wishBox");
  const BText = document.getElementById("BText");

  wishBox.classList.remove("hidden");

  // Add animation to the text
  BText.classList.add("b-animate");
}
 