const contenedorPrincipal = document.getElementById('datos');
async function obtenerDatos() {
    try {
        const respuestaDatos = await fetch('./data.json');
        const datosZapatos= await respuestaDatos.json();
        console.log(datosZapatos);

        datosZapatos.forEach((zapato) => {
            crearZapato(zapato);
        });
    }
    catch (error) {console.error("esta fallando en: ",error);
    }
}

function crearZapato(zapato) {
    const contenedorZapato = document.createElement('div');

    contenedorZapato.innerHTML = `
    <h2>nombre:${zapato.nombre}</h2>
    <b>marca:${zapato.marca}</b>
    <p>precio:${zapato.precio}</p>
    <p>Color: ${zapato.color}</p>
    <p>Talla: ${zapato.talla}</p>
    <p>Tipo: ${zapato.tipo}</p>
    <img src="${zapato.imagen}" width="200">
`;
    contenedorPrincipal.appendChild(contenedorZapato);
}
obtenerDatos();