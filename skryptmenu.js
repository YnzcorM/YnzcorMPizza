const koszykzawartosc = document.querySelector(".koszykzawartosc");
const koszyk = document.querySelector(".tresc");
function koszykon(){
  koszykzawartosc.style.display = "block";
  }
function koszykoff(){
  koszykzawartosc.style.display = "none";
}
const zawartosc = document.querySelector(".imgkosza");
zawartosc.addEventListener("mouseenter",koszykon);
zawartosc.addEventListener("mouseout",koszykoff);

// Otwieranie koszyka

const cena = document.querySelector(".sumakoszyka");
let suma = 0;
function sumakoszyka(){
  suma = (kaprysnad*32)+(kaprysnas*26)+(kaprysnam*18)+(salamid*31)+(salamis*25)+(salamim*17)+(hawajskad*34)+(hawajskas*27)+(hawajskam*19)+(mysliwskad*34)+(mysliwskas*28)+(mysliwskam*18)+(Jalapenod*32)+(Jalapenos*24)+(Jalapenom*16);
  return suma;
}

//suma koszyka

let kaprysnam = 0;
let salamim = 0;
let hawajskam = 0;
let mysliwskam = 0;
let Jalapenom = 0;
let kaprysnas = 0;
let salamis = 0;
let hawajskas = 0;
let mysliwskas = 0;
let Jalapenos = 0;
let kaprysnad = 0;
let salamid = 0;
let hawajskad = 0;
let mysliwskad = 0;
let Jalapenod = 0;

function kaprysnaaddm(){
  kaprysnam+=1;
  koszyk.innerHTML+="KAPRYSNA MAŁA<br>";
  sumakoszyka();
}
function salamiaddm(){
  salamim+=1;
  koszyk.innerHTML+="SALAMI MAŁA<br>";
  sumakoszyka();
}
function hawajskaaddm(){
  hawajskam+=1;
  koszyk.innerHTML+="HAWAJSKA MAŁA<br>";
  sumakoszyka();
}
function mysliwskaaddm(){
  mysliwskam+=1;
  koszyk.innerHTML+="MYŚLIWSKA MAŁA<br>";
  sumakoszyka();
}
function jalapenoaddm(){
  Jalapenom+=1;
  koszyk.innerHTML+="JALAPENO MAŁA<br>";
  sumakoszyka();
}
function kaprysnaadds(){
  kaprysnas+=1;
  koszyk.innerHTML+="KAPRYSNA ŚREDNIA<br>";
  sumakoszyka();
}
function salamiadds(){
  salamis+=1;
  koszyk.innerHTML+="SALAMI ŚREDNIA<br>";
  sumakoszyka();
}
function hawajskaadds(){
  hawajskas+=1;
  koszyk.innerHTML+="HAWAJSKA ŚREDNIA<br>";
  sumakoszyka();
}
function mysliwskaadds(){
  mysliwskas+=1;
  koszyk.innerHTML+="MYŚLIWSKA ŚREDNIA<br>";
  sumakoszyka();
}
function jalapenoadds(){
  Jalapenos+=1;
  koszyk.innerHTML+="JALAPENO ŚREDNIA<br>";
  sumakoszyka();
}
function kaprysnaaddd(){
  kaprysnad+=1;
  koszyk.innerHTML+="KAPRYŚNA DUŻA<br>";
  sumakoszyka();
}
function salamiaddd(){
  salamid+=1;
  koszyk.innerHTML+="SALAMI DUŻA<br>";
  sumakoszyka();
}
function hawajskaaddd(){
  hawajskad+=1;
  koszyk.innerHTML+="HAWAJSKA DUŻA<br>";
  sumakoszyka();
}
function mysliwskaaddd(){
  mysliwskad+=1;
  koszyk.innerHTML+="MYŚLIWSKA DUŻA<br>";
  sumakoszyka();
}
function jalapenoaddd(){
  Jalapenod+=1;
  koszyk.innerHTML+="JALAPENO DUŻA<br>";
  sumakoszyka();
}
const tablicaguzikow = [kaprysnaaddd,kaprysnaaddm,kaprysnaadds]; 
//zawartosc koszyka

function aktualizacja(){
  cena.innerHTML="Do zaplaty: "+ suma;
}

setInterval(aktualizacja,1000);