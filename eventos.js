var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

//console.log(teclas);
document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
  //console.log(evento);

dibujarLinea("red", 149, 149, 151, 151, papel);
var x = 150;
var y = 150;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}//Funciones dibujarLinea


function dibujarTeclado(evento)
{
  var colorcito = "blue";
  var movimiento = 10;
    switch (evento.keyCode)
    {
      case teclas.LEFT:
          dibujarLinea(colorcito, x, y, x - movimiento, y, papel );
          x = x - movimiento;
      break;
      case teclas.UP:
          dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
          y = y - movimiento;
      break;
      case teclas.RIGHT:
          dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
          x = x + movimiento;
      break;
      case teclas.DOWN:
          dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
          y = y + movimiento;
      break;
      default:
          console.log("Tecla distinta a las flechitas");
    }


}
/*{
  if(evento.keyCode == teclas.UP){
    console.log("arriba");
  }
  else if(evento.keyCode == teclas.LEFT){
    console.log("izquierda");
  }
  else if(evento.keyCode == teclas.RIGHT){
    console.log("Derecha");
  }
  else if(evento.keyCode == teclas.DOWN){
    console.log("Abajo");
  }
  else {
    console.log("Tecla diferente");
  }
}*/
