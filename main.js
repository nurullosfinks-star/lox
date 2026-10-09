let ism = prompt(`Ismingizni kiriting:`);
let familiya = prompt(`Familiyangizni kiriting:`);
let ball = prompt(`Olgan balingizni kiriting:`);

let natija = document.querySelector(`.natija`);


natija.innerHTML = ism + " " + familiya;

natija.style.textAlign = "center";
natija.style.marginTop = "200px"
natija.style.color = "white"
natija.style.fontSize = "70px"
natija.style.fontWeight = "900"
natija.style.fontFamily = "sans-serif "

if (ball >= 85) {
  natija.innerHTML += "<br>Siz grandga kirdingiz!";
  document.body.style.backgroundColor = "green";

} else if (ball >= 60) {
  natija.innerHTML += "<br>Siz kontraktga kirdingiz!";
  document.body.style.backgroundColor = "yellow";
} else if (ball >= 30) {
  natija.innerHTML += "<br>Siz super kontraktga kirdingiz!";
  document.body.style.backgroundColor = "orangered";
} else {
  natija.innerHTML += "<br>Siz testdan yeqildingiz!";
  document.body.style.backgroundColor = "red";
}
