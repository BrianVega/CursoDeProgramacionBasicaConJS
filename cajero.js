var imagenes = [];
imagenes["100"] = "100.jpg";
imagenes["50"] = "50.jpg";
imagenes["20"] = "20.jpg";

class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;

  }//constructor function
}//billete class


function entregarDinero()
{
  this.imagen = new Image();

  this.imagen.src = imagenes[e.valor];

  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {
    if(dinero > 0)
    {
        div = Math.floor(dinero / bi.valor);
        if(div > bi.cantidad)
        {
          papeles = bi.cantidad;
        }//if div > bi.cantidad
        else
        {
          papeles = div;
        }//else
        entregado.push(new Billete(bi.valor, papeles));
        dinero = dinero - (bi.valor * papeles);
    }//if dinero >
  }// for bar bi of caja

  if(dinero > 0)
  {
    resultado.innerHTML = "Soy un cajero pobre y no tengo dinero :(";
  }
  else{
    for (var e of entregado)
    {
      if(e.cantidad > 0)
        while(e.cantidad > 0){
          document.body.appendChild(e.valor);
          e.cantidad = e.cantidad - 1;
        }//while
        //resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
    }// for
  }//else
}//entregarDineroo

var caja = [];
var entregado = [];
caja.push(new Billete(100, 10));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 30));
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
