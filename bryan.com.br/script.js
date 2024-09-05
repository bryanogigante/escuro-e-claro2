/* const changeThemeBtn = document.querySelector("#change-theme");

changeThemeBtn.addEventListener("change", function () {
    document.body.classList.toggle("dark");
}); */

function TemaEscuro(){
    document.getElementById("dark").style.backgroundColor = "#000"
    document.getElementById("description").style.color = "#fff"
     document.getElementById("subtitle").style.color = "#fff"
     document.getElementById("tenis nike").style.color = "#fff"
}

function TemaClaro(){
    document.getElementById("dark").style.backgroundColor = "#fff"
    document.getElementById("description").style.color = "#000"
    document.getElementById("subtitle").style.color = "#000"
    document.getElementById("tenis nike").style.color = "#000"
}

