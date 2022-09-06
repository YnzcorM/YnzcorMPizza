let login = "login";
let haslo = "haslo";
zalogowany = false;

function pizza(){
  document.getElementById("guzik").innerHTML = "Pyszna pizza prawda?";
  let tlo = document.querySelector(".prawy");
  tlo.style.backgroundColor = "red";
}

function okno(){
  if(zalogowany == false){
  let okno = document.querySelector("#logowanie");
  okno.style.display = "block";
  }
  else{
    document.getElementById("zaloguj").innerHTML = "Zaloguj";
    alert("Zostales wylogowany!")
    zalogowany = false;
  }

}

function zaloguj(){
 
  login1 = document.forms["formularz"].login.value;
  haslo1 = document.forms["formularz"].haslo.value;
  if(login1 == login && haslo1 === haslo){
  document.getElementById("zaloguj").innerHTML = "Wyloguj";
  let okno = document.querySelector("#logowanie");
  okno.style.display = "none";
  alert("Zostales zalogowany");
  zalogowany = true;
  }
  else{
    alert("Nieprawidłowe haslo");
  }
}
const blok0 = document.querySelector(".opis0");
const blok1 = document.querySelector(".opis1");
const blok2 = document.querySelector(".opis2");
const blok3 = document.querySelector(".opis3");
const blok4 = document.querySelector(".opis4");
function opis0(){
  blok0.style.display = "block";
  }
function opisout0(){
  blok0.style.display = "none";
}
function opis1(){
  blok1.style.display = "block";
  }
function opisout1(){
  blok1.style.display = "none";
}
function opis2(){
  blok2.style.display = "block";
  }
function opisout2(){
  blok2.style.display = "none";
}
function opis3(){
  blok3.style.display = "block";
  }
function opisout3(){
  blok3.style.display = "none";
}
function opis4(){
  blok4.style.display = "block";
  }
function opisout4(){
  blok4.style.display = "none";
}
const alergen = document.querySelectorAll(".znak");
alergen[0].addEventListener("mouseenter",opis0);
alergen[0].addEventListener("mouseout",opisout0);
alergen[1].addEventListener("mouseenter",opis1);
alergen[1].addEventListener("mouseout",opisout1);
alergen[2].addEventListener("mouseenter",opis2);
alergen[2].addEventListener("mouseout",opisout2);
alergen[3].addEventListener("mouseenter",opis3);
alergen[3].addEventListener("mouseout",opisout3);
alergen[4].addEventListener("mouseenter",opis4);
alergen[4].addEventListener("mouseout",opisout4);