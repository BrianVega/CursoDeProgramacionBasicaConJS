var express = require("express");/*Busca en el Backend todas las librerias
instaladas y las trae,  las guarda en la memoria a través de la variable express*/
//No por el hecho de instalarlo por npm, significa que ya funciona
var app = express();//Se ejecuta express como funcion y se agrega a la variable app

app.get("/", inicio);
app.get("/cursos", cursos);


function inicio(peticion, resultado){
    resultado.send("Este es el <strong>Home, cambio 1</strong>");
}//FUNCION INICIO

function cursos(peticion, resultado){
  resultado.send("Estos son los <strong>Resultados</strong>");
}//Funcion Cursos

app.listen(8989);
