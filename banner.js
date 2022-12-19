var i = 0;
var imagenes = [];
var time = 2000;

//lista de imagenes
imagenes[0] = "./img/bike-1.jpg";
imagenes[1] = "./img/banner-2.jpg";
imagenes[2] = "./img/banner-3.jpg";

function cambiarBanner() {
  console.log("imagen del banner");
  var slider = document.getElementById("slider");
  if (i < imagenes.length) {
    console.log("contador"+i);
    //Agregar imagenes de fondo del banner (background-image)se crea aqui
    slider.style.backgroundImage= `url(${imagenes[i]})`;
    i++;
  } else {
    i = 0;
  }
  setTimeout("cambiarBanner()", time);
}

window.onload = cambiarBanner;
