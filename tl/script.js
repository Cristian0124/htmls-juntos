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
    <img class="imagen-zapato" src="${zapato.imagen}">
    <h2>nombre:${zapato.nombre}</h2>
`;
    
    const imagen = contenedorZapato.querySelector('.imagen-zapato');

    imagen.addEventListener('click', ()=>{
        mostrarZapato(zapato);
    });

    contenedorPrincipal.appendChild(contenedorZapato);
}

function mostrarZapato(zapato){

    const modal = document.createElement('div');
    modal.className = 'modal';

    modal.style.display = 'flex';

    modal.innerHTML = `
        <div class="modal-contenido">

            <span id="cerrar">&times;</span>

            <img src="${zapato.imagen}">

            <div class="modal-informacion">

                <h2>${zapato.nombre}</h2>

                <p><b>Marca:</b> ${zapato.marca}</p>
                <p><b>Precio:</b> ${zapato.precio}</p>
                <p><b>Color:</b> ${zapato.color}</p>
                <p><b>Talla:</b> ${zapato.talla}</p>
                <p><b>Tipo:</b> ${zapato.tipo}</p>

            </div>

        </div>
    `;

    document.body.appendChild(modal);

    const cerrar = modal.querySelector('#cerrar');

    cerrar.addEventListener('click', ()=>{
        modal.remove();
    });

}

obtenerDatos();