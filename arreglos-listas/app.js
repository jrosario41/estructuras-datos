const resultado = document.getElementById("txtresultado");
function mensaje(texto){
    console.log(texto);
    alert(texto);
    const resultado = document.getElementById("txtresultado");
    resultado.textContent = texto;

}

function agregar (palabra){
     resultado.textContent = palabra;
}

function eliminar (palabra){
    
}

function mostrar (palabra){
    
}

function modificar (palabra){
    
}


const Btnagregar = document.getElementById("btnagregar");

const Btneliminar = document.getElementById("btneliminar");

const Btnmostrar = document.getElementById("btnmostrar");

const Btnmodificar = document.getElementById("btnmodificar");

Btnagregar.addeventlistener("click",agragar("klk"));

Btnelimiar.addeventlistener("click",eliminar("klk"));

Btnmostrar.addeventlistener("click",mostrar("klk"));

Btnmodificar.addeventlistener("click",modificar("klk"));
