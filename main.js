var money = 500
var upgradeDesignPrice = 100
var designLevel = 0
var sales = 0
var saleScore = 0

function start() {
  var gameStartPrompt = prompt("Welcome! Please Choose a Name For Your company!");
  companyName = gameStartPrompt;
  document.getElementById("companyName").innerHTML = companyName;
  document.getElementById("starterDiv").className = "hidden";
  document.getElementById("mainContentDiv").className = "mainContentDiv";
  document.getElementById("employmentDiv").className = "employmentDiv";
  window.alert("the bank has given your company a loan of £500 - spend it wisely!")
}

function upgradeDesign() {
  money = money -= upgradeDesignPrice;
  upgradeDesignPrice = upgradeDesignPrice *= 1.2;
  document.getElementById("designerPrice").innerHTML = upgradeDesignPrice;
  designLevel = designLevel += 1;
  document.getElementById("designLevel").innerHTML = designLevel;
}
