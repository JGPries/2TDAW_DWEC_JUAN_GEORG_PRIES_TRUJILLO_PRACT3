"use strict"

// Ajustes para los botones de las categorías

const muestras =[];
total.forEach(
    (muestra)=>{
        muestras.push(muestra["categoria"]);
    }
)

let tipos=muestras.filter(
    (elemento,posicion)=>{
        return muestras.indexOf(elemento)==posicion;
    }
)

tipos.forEach(
    (botones)=>{
        document.write(`<button class="botones">${botones}</button>`);
    }
)

// br hardcoding para separar los botones de los productos (solo para que quede mas ordenado)
document.write(`<br>`);

// con esto muestro los productos pero solo las fotos hasta que pinchas encima
total.forEach(
    (plantilla) => {
        document.write(`<div class="gal">
                            <img id="" src="${plantilla["imagen"]}">
                        </div>
                        <div class="vacio">
                            <div>
                                <p>Nombre del producto: ${plantilla["nombre"]}</p>
                                <p>Descripción: ${plantilla["descripcion"]}</p>
                                <p>Precio: ${plantilla["precio"]} €</p>
                                <button class="salir">Salir</button>
                                <img src="${plantilla["imagen"]}">
                            </div>
                        </div>
                        `)
    }
);



 