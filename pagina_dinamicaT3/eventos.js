"use strict"

const datos_imagenes = document.querySelectorAll(".gal");
const div_oculto = document.querySelectorAll(".vacio");
const bsalir = document.querySelectorAll(".salir");

// ajustes para que funcione el boton de salir de la ficha producto
bsalir.forEach(
    (buton)=>{
        const b=buton.parentElement.parentElement;
        buton.addEventListener("click",
            ()=>{
                    if(b.classList.contains("mostrar")){
                        b.classList.remove("mostrar");
                        b.classList.add("vacio");
                    }
            }
        )
    }
);

// ajustes para que aparezca y desaparezca la ficha producto
datos_imagenes.forEach(
    (informacion)=>{
        const datos=informacion.nextElementSibling;
        informacion.addEventListener("click",
            ()=>{
                    if(datos.classList.contains("vacio")){
                        datos.classList.remove("vacio");
                        datos.classList.add("mostrar");
                    }else{
                        datos.classList.remove("mostrar");
                        datos.classList.add("vacio");
                    } 
            }
        )

    }
);


