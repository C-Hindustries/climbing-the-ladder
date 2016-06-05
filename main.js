var money = 500
var upgradeDesignPrice = 100
var designLevel = 0
var sales = 0
var saleScore = 0
var upgradeAdvertisePrice = 100
var advertiseLevel = 0
var upgradeLawyerPrice = 200
var lawyerLevel = 0
var upgradeFactoryPrice = 300
var factoryLevel
var upgradeOfficePrice = 300
var officeLevel = 0
var saleUpgrade = 1

function start() {
  var gameStartPrompt = prompt("Welcome! Please Choose a Name For Your company!");
  companyName = gameStartPrompt;
  document.getElementById("companyName").innerHTML = companyName;
  document.getElementById("starterDiv").className = "hidden";
  document.getElementById("mainContentDiv").className = "mainContentDiv";
  document.getElementById("employmentDiv").className = "employmentDiv";
  window.alert("the bank has given your company a loan of £500 - spend it wisely! (we suggest that you upgrade all different things - it's better!)")
}

function upgradeDesign() {
  if (money >= upgradeAdvertisePrice) {
    money = money -= upgradeAdvertisePrice;
    document.getElementById("earnNum").innerHTML = money;
    upgradeDesignPrice = upgradeDesignPrice *= 1.2;
    document.getElementById("designerPrice").innerHTML = upgradeDesignPrice;
    designLevel = designLevel += 1;
    document.getElementById("designLevel").innerHTML = designLevel;
    saleScore += designLevel;
  }
}

function upgradeAdvertise() {
  if (money >= upgradeDesignPrice) {
    money = money -= upgradeAdvertisePrice;
    document.getElementById("earnNum").innerHTML = money;
    upgradeAdvertisePrice = upgradeAdvertisePrice *= 1.2;
    document.getElementById("advertisePrice").innerHTML = upgradeAdvertisePrice;
    advertiseLevel = advertiseLevel += 1;
    document.getElementById("advertiseLevel").innerHTML = advertiseLevel;
    saleScore += advertiseLevel;
    
  }
}

function upgradeLawyer() {
  if (money >= upgradeLawyerPrice) {
    money = money -= upgradeLawyerPrice;
    document.getElementById("earnNum").innerHTML = money;
    upgradeLawyerPrice = upgradeLawyerPrice *= 1.2;
    document.getElementById("lawyerPrice").innerHTML = upgradeLawyerPrice;
    lawyerLevel = lawyerLevel += 1;
    document.getElementById("lawyerLevel").innerHTML = lawyerLevel;
    saleScore += lawyerLevel;
  }
}

function upgradeFactory() {
  if (money >= upgradeFactoryPrice) {
    money = money -= upgradeFactoryPrice;
    document.getElementById("earnNum").innerHTML = money;
    upgradeFactoryPrice = upgradeFactoryPrice *= 1.2;
    document.getElementById("factoryPrice").innerHTML = upgradeFactoryPrice;
    factoryLevel = factoryLevel += 2;
    document.getElementById("factoryLevel").innerHTML = factoryLevel;
    saleScore += factoryLevel;
  }
}

function upgradeOffice() {
  if (money >= upgradeOfficePrice) {
    money = money -= upgOfficeradeOfficePrice;
    document.getElementById("earnNum").innerHTML = money;
    upgradeOfficePrice = upgradeOfficePrice *= 1.2;
    document.getElementById("factoryPrice").innerHTML = upgradeOfficePrice;
    officeLevel = officeLevel += 2;
    document.getElementById("officeLevel").innerHTML = officeLevel;
    saleScore += officeLevel;
  }
}

function getSale() {
  sales = sales += saleUpgrade
  document.getElementById("salesnNum").innerHTML = sales;
  money = money += (sales /= 1.5)
  document.getElementById("earnNum").innerHTML = money;
}

// 1 Second Loop
window.setInterval(function(){
  // Put code to be run every second in here.
    advertise();
}, 1000);

function advertise() {
  sales = sales += advertiseLevel
}
