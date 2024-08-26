//variables
const btnEncriptar = document.querySelector(".botones__ed__a");
const txtEncriptar = document.querySelector(".cuadro");
const aviso = document.querySelector(".texto__alerta");
const respuesta = document.querySelector(".Imgleft");
const respuesta2 = document.querySelector(".Msgleft");
const btnDesencriptar = document.querySelector(".botones__ed__b");
const btncopy = document.querySelector(".btn__copy");
//boton para encriptar 
btnEncriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    //reemplaza caracteres por espacio en blanco
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    //condicional

    if (texto == "") {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";
        
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);

    } else if (texto !== txt) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos ni caracteres especiales";
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);



    } else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
        //lectura del texto encriptado
        respuesta.innerHTML = `<p style="font-size: 4rem; color: var(--color-quinto); text-align: center; font-family: var(--fuente-regular);">${texto}</p>`;
        respuesta2.style.display = "none";
        btncopy.style.display = "inline-block";
        
        
    }   
    console.log(btncopy); // Esto debería mostrar el elemento en la consola

    
    });
    btncopy.style.display = "none";

    //boton para desencriptar 
btnDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    //reemplaza caracteres por espacio en blanco
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    //condicional

    if (texto == "") {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);

    } else if (texto !== txt) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos ni caracteres especiales";
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);



    } else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");
        //lectura del texto encriptado
        respuesta.innerHTML = `<p style="font-size: 4rem; color: var(--color-quinto); text-align: center; font-family: var(--fuente-regular);">${texto}</p>`;
        respuesta2.style.display = "none";
        btncopy.style.display = "inline-block";
        
        
    }   
    console.log(btncopy); // Esto debería mostrar el elemento en la consola

    
    });
     //boton para copiar
btncopy.addEventListener("click", e => {
    e.preventDefault();
    let textoParaCopiar = respuesta.textContent || respuesta.innerText; // Obtiene el texto del contenedor
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        console.log("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar al portapapeles: ", err);
    });
});

