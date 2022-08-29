var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".cont-munieco");
var h3 = document.querySelector(".cont-h3");
var parrafo = document.querySelector(".cont-parrafo");
var resultado = document.querySelector(".text-result");
var botonCopiar = document.querySelector(".btn-copiar");

navigator.clipboard.writeText(resultado.innerHTML);

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

function encriptar(){
    ocultarCosas();
    resultado.textContent = encriptarText(recuperarTexto());
}

function desencriptar(){
    ocultarCosas();
    resultado.textContent = desencriptarText(recuperarTexto());
}

function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarCosas(){
    munieco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarText(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){

        if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    
    return textoFinal; 
}

function desencriptarText(mensaje){
    var texto = mensaje;
    var textoFinal = "";
   for(var i = 0; i < texto.length; i++){
       if(texto[i] == "a"){
          textoFinal = textoFinal + "a"
          i = i;
        }
       else if(texto[i] == "e"){
          textoFinal = textoFinal + "e"
          i = i;
        }
       else if(texto[i] == "i"){
          textoFinal = textoFinal + "i"
          i = i;
        }
        else if(texto[i] == "o"){
          textoFinal = textoFinal + "o"
          i = i;
        }
       else if(texto[i] == "u"){
           textoFinal = textoFinal + "u"
           i = i;
        }
        else{
           textoFinal = textoFinal + texto[i];
        }
    }

  return textoFinal;

}




