const login = document.getElementById("login-btn");
login.addEventListener("click",function() {
    const loginArea =document.getElementById("login-page");
    loginArea.style.display="none";
    const account= document.getElementById("account-details");
    account.style.display="block";
})

function transactionUpdate(newAmountGet, prvAmountGet) {
    const newUserAmount= document.getElementById(newAmountGet).value;
    const newUserNum=parseFloat(newUserAmount);
    const prvAmount= document.getElementById(prvAmountGet).innerText;
    const prvAmountNum= parseFloat(prvAmount);
    const totalAmount= newUserNum + prvAmountNum;
    document.getElementById(prvAmountGet).innerText= totalAmount;
}

function balanceUpdate(prvBalanceGet,newUserNum) {
   const prvBalance=document.getElementById(prvBalanceGet).innerText;
   const prvBalanceNum=parseFloat(prvBalance);
   const totalAmount= prvBalanceNum+newUserNum;
   document.getElementById(prvBalanceGet).innerText= totalAmount;
}

// Deposit Event Handler
const depositAction= document.getElementById("deposit-btn");
depositAction.addEventListener("click",function () {
    transactionUpdate("new-deposit", "deposit-amount");
    const newDeposit= document.getElementById("new-deposit").value;
    const newDepositNum=parseFloat(newDeposit);
    balanceUpdate("balance-amount",newDepositNum);
    document.getElementById("new-deposit").value="";
})

// Withdraw Event Handler
const withdrawAction= document.getElementById("withdraw-btn");
withdrawAction.addEventListener("click",function () {
    transactionUpdate("new-withdraw", "withdraw-amount");
    const newWithdraw= document.getElementById("new-withdraw").value;
    const newWithdrawNum=parseFloat(newWithdraw);
    balanceUpdate("balance-amount",-1*newWithdrawNum);
    document.getElementById("new-withdraw").value="";
})
