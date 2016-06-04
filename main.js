var money = 500

function start() {
  var gameStartPrompt = prompt("Welcome! Please Choose a Name For Your company!");
  companyName = gameStartPrompt;
  document.getElementById("companyName").innerHTML = companyName;
  document.getElementById("starterDiv").className = "hidden";
  document.getElementById("mainContentDiv").className = "mainContentDiv";
  document.getElementById("employmentDiv").className = "employmentDiv";
  window.alert("the bank has given your company a loan of £500 - spend it wisely!")
}
