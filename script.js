// login Button JS
document.getElementById("transaction-area").style.display ="none";
const btn = document.getElementById("login");
btn.addEventListener("click",function() {
    const logIn = document.getElementById("login-area");
    logIn.style.display="none";
    document.getElementById("transaction-area").style.display ="block";
})
// deposit button JS

document.getElementById("addDeposit").addEventListener("click", function(){
   const depositAmount = document.getElementById("depositAmount").value;
   const depositNumber = parseFloat(depositAmount);
currentSituation("currentDeposit");

currentSituation("currentBalance");
 
  document.getElementById("depositAmount").value = "";

  function currentSituation(id) {
    const currentAmount = document.getElementById(id).innerText;
    const currentNumber = parseFloat(currentAmount);
    total = currentNumber + depositNumber ;
  
    document.getElementById(id).innerHTML = total;
  }    
})

// withdrow button event handler

const addWithdrowBtn = document.getElementById("addWithdrow");
addWithdrowBtn.addEventListener("click", function(){
  const getInputNumber("withdrowAmount");

  currentSituation("currentWithdrow");
}

function getInputNumber(Id){

  const witihdrowAmount = document.getElementById(Id).value;
  const withdrowNumber = parseFloat(witihdrowAmount);

  return withdrowNumber;
  
} 
 document.getElementById("withdrowAmount").value = "";






 
// const currentAmount = document.getElementById("currentWithdrow").innerText;
// const currentWithdrowNumber = parseFloat(currentAmount);
// totalWithdrow = currentWithdrowNumber + withdrowNumber ;

// document.getElementById("currentWithdrow").innerText = totalWithdrow;