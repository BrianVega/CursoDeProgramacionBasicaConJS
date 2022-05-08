/*var z;
for(var x=0; x<10; x++)
{
  z = aleatorio (-5, 10000)
  document.write(z + ", ");
}

document.write(z);
*/
document.addEventListener("keydown", leerTecla);
var vp = document.getElementById("villaPlatzi");
var papel =  vp.getContext("2d");
var cantidad =  aleatorio(5,25);
console.log(papel);
var xCerdo = 200;
var yCerdo = 200;
var xVaca = 0;
var yVaca = 0;


var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

var fondo = {
  url: "tile.png",
  cargaOk: false
};
var vaca = {
  url: "vaca.png",
  cargaOk: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOk = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOk = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOk)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
if(vaca.cargaOk)
{
  console.log(cantidad);
  for(var v=0; v < cantidad; v++)
  {
    xVaca = aleatorio(0, 7);
    yVaca = aleatorio(0, 7);
    xVaca = xVaca * 60;
    yVaca = yVaca * 60;
    papel.drawImage(vaca.imagen, xVaca, yVaca);
}
}//if vaca

/*if(cerdo.cargaOk)
{
  papel.drawImage(cerdo.imagen, x, y);
  console.log(papel);
}//if cerdo*/
}//function dibujar

function leerTecla(evento)
{
  //do{
  var cerdito = cerdo.imagen;
  var movimiento = 10;

  switch (evento.keyCode)
  {
    case teclas.LEFT:
        papel.drawImage(fondo.imagen, 0, 0);

        for(var v=0; v < cantidad; v++)
        {
          papel.drawImage(vaca.imagen, xVaca, yVaca);
      }

        papel.drawImage(cerdo.imagen, xCerdo - movimiento, yCerdo);
        xCerdo = xCerdo - movimiento;
        yCerdo = yCerdo;
    break;
    case teclas.UP:
        papel.drawImage(fondo.imagen, 0, 0);
        papel.drawImage(cerdo.imagen, xCerdo, yCerdo - movimiento);
          xCerdo = xCerdo;
          yCerdo = yCerdo - movimiento;

      /*  moverCerdito(cerdito, xCerdo, yCerdo, xCerdo, yCerdo - movimiento, papel);
        yCerdo = yCerdo - movimiento;*/
    break;
    case teclas.RIGHT:
        //cerdo.imagen.clear();
        papel.drawImage(fondo.imagen, 0, 0);
        papel.drawImage(cerdo.imagen, xCerdo + movimiento, yCerdo);
        xCerdo = xCerdo + movimiento;
        yCerdo = yCerdo;

        /*moverCerdito(cerdito, xCerdo, yCerdo, xCerdo + movimiento, yCerdo, papel);
        xCerdo = xCerdo + movimiento;*/
    break;
    case teclas.DOWN:
        //cerdo.imagen.clear();
        papel.drawImage(fondo.imagen, 0, 0);
        papel.drawImage(cerdo.imagen, xCerdo, yCerdo +  movimiento);
          xCerdo = xCerdo;
          yCerdo = yCerdo + movimiento;

        /*moverCerdito(cerdito, xCerdo, yCerdo, xCerdo, yCerdo + movimiento, papel);
        yCerdo = yCerdo + movimiento;*/
    break;
    default:
        console.log("Tecla distinta a las flechitas");
  }//switch
//}while
}//function

function moverCerdito(cerdito, xinicial, yinicial, xfinal, yfinal, papel)
{
    papel.beginPath();
    papel.strokeStyle = cerdito;
    papel.moveTo(xinicial, yinicial);
    papel.lineTo(xfinal, yfinal);
    papel.stroke;
    papel.drawImage(cerdo.imagen, xCerdo - movimiento, yCerdo);
    papel.closePath();
}//moverCerdito




function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}//aleatorio function
