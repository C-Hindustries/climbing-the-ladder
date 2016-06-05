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
  if (money >= upgradeDesignPrice) {
    money = money -= upgradeDesignPrice;
    upgradeDesignPrice = upgradeDesignPrice *= 1.2;
    document.getElementById("designerPrice").innerHTML = upgradeDesignPrice;
    designLevel = designLevel += 1;
    document.getElementById("designLevel").innerHTML = designLevel;
    saleScore += designLevel;
  }
}

function upgradeDesign() {
  if (money >= upgradeDesignPrice) {
    money = money -= upgradeDesignPrice;
    upgradeDesignPrice = upgradeDesignPrice *= 1.2;
    document.getElementById("designerPrice").innerHTML = upgradeDesignPrice;
    designLevel = designLevel += 1;
    document.getElementById("designLevel").innerHTML = designLevel;
    saleScore += designLevel;
  }
}

// 1 Second Loop
window.setInterval(function(){
  // Put code to be run every second in here.
  if (saleScore >= 5) {
    sale();
    addMoney();
    unHideExtras();
  }
}, 1000);

function sale() {
  sales = sales += saleScore;
  document.getElementById("salesnNum").innerHTML = sales;
}

function AddMoney() {
  if (saleScore = 5, money = 0 ){
    window.alert("well done! you have now fully invested your money and your company is destined for greatness with skills like these!")
  }
  money = money += (sales /= 1.5);
  document.getElementById("earnNum").innerHTML = money;
}
