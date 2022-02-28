const login = document.getElementById("login-btn");
login.addEventListener("click",function() {
    const loginArea =document.getElementById("login-page");
    loginArea.style.display="none";
    const account= document.getElementById("account-details");
    account.style.display="block";
})

