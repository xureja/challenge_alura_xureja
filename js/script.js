var msj = document.querySelector("#textarea"); 
var btnEncriptar = document.querySelector("#encriptar"); 
var btnDesencriptar = document.querySelector("#desencriptar"); 
var btnCopiar = document.querySelector("#copiar"); 
var msjFinal = document.querySelector("#resultado"); 


/*Función encriptar*/
function msjEncriptar(txt) {
    if (txt == "a") {
        return "ai";
    } else if (txt == "e") {
        return "enter";
    } else if (txt == "i") {
        return "imes";
    } else if (txt == "o") {
        return "ober";
    } else if (txt == "u") {
        return "ufat";
    }
}

function encriptar(txt) {
    var msjEncriptado = txt.replace(/a|e|i|o|u/g, msjEncriptar); 
    let noEncontrado = document.getElementById('ocultar');
    let mensajeFinal = document.getElementById('resultado');
    let copiar = document.getElementById('copiar');
    let enter = document.getElementById('encriptar');
    noEncontrado.style.display = "none";
    mensajeFinal.style.display = 'flex';
    copiar.style.display = 'block';
    return msjEncriptado;
}

/*Función desencriptar*/
function msjDesencriptar(txt) {
    if (txt == "ai") {
        return "a";
    } else if (txt == "enter") {
        return "e";
    } else if (txt == "imes") {
        return "i";
    } else if (txt == "ober") {
        return "o";
    } else if (txt == "ufat") {
        return "u";
    }
}

function desencriptar(txt) {
    var msjDesencriptado = txt.replace(/ai|enter|imes|ober|ufat/g, msjDesencriptar);
    return msjDesencriptado;
}



btnEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var txt = msj.value;
    var msjSeguro = encriptar(txt);
    msjFinal.value = msjSeguro;
    console.log(msjSeguro);
});

btnDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var txt = msj.value;
    var msjSeguro = desencriptar(txt);
    msjFinal.value = msjSeguro;
    console.log(msjSeguro);
});

btnCopiar.addEventListener("click", function (event) {
    event.preventDefault();
    msjFinal.select();
    navigator.clipboard.writeText(msjFinal.value);
});