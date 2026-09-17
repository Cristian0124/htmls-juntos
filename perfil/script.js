const contenedorPrincipal = document.getElementById('datos');

const botonPerfil = document.getElementById('verPerfil');

async function obtenerDatos() {
    try {
        const respuestaDatos = await fetch('./data.json');
        const datosPerfil= await respuestaDatos.json();
        console.log(datosPerfil);

        botonPerfil.addEventListener('click', ()=>{
            crearPerfil(datosPerfil);
        });

    }
    catch (error) {console.error("esta fallando en: ",error);
    }   

}

function crearPerfil(perfil) {
    const contenedorPerfil = document.createElement('div');

    contenedorPerfil.innerHTML = `
    
    <div class="foto">
        <img src="${perfil.imagen}">
    </div>

    <div class="informacion">

        <h1>NOMBRE</h1>
        <p>${perfil.nombre}</p>

        <h1>EDAD</h1>
        <p>${perfil.edad}</p>

        <h1>CARRERA</h1>
        <p>${perfil.carrera}</p>

        <h1>SEMESTRE</h1>
        <p>${perfil.semestre}</p>

        <h1>UNIVERSIDAD</h1>
        <p>${perfil.universidad}</p>

        <h1>CIUDAD</h1>
        <p>${perfil.ciudad}</p>

        <h1>INTERESES</h1>
        <p>${perfil.interes}</p>

    </div>

    `;

    contenedorPrincipal.appendChild(contenedorPerfil);
}

obtenerDatos();