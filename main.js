function start() {
  var gameStartPrompt = prompt("Welcome! Please Choose a Name For Your company!");
  companyName = gameStartPrompt;
  document.getElementById("companyName").innerHTML = companyName;
  document.getElementById("starterDiv").className = "hidden";
  document.getElementById("mainContentDiv").className = "mainContentDiv";
}
