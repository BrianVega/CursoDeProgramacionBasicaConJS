var texto = document.getElementById("texto_lineas");
var xxx;
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
//console.log(lienzo);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}//Funciones

function  dibujoPorClick()
{
  xxx = parseInt(texto.value);
  //alert("No me toques ahí " + xxx);

  var lineas = xxx;
  var l = 0;
  var xi, yi=300, xf, yf;
  var colorcito = "#FAA";
  var espacio = ancho / lineas;

  for(l<=0; l<lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (1 + l);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("linea" + l);

    dibujarLinea(colorcito, ancho-ancho+1,ancho-ancho+1,ancho-ancho+1,ancho);
    dibujarLinea(colorcito, ancho-ancho+1,ancho-1,ancho-1,ancho-1);



  }//x=0, y=0, inferior izquierdo
}
