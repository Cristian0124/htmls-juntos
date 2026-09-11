const contenedorPrincipal = document.getElementById('datos');
async function obtenerDatos() {
    try {
        const respuestaDatos = await fetch('./data.json');
        const datosPerfil= await respuestaDatos.json();
        console.log(datosPerfil);
        crearPerfil(datosPerfil);
    }
    catch (error) {console.error("esta fallando en: ",error);
    }   

}

function crearPerfil(perfil) {
    const contenedorPerfil = document.createElement('div');
    contenedorPerfil.innerHTML = `
    <h2>nombre:${perfil.nombre}</h2>
    <b>edad:${perfil.edad}</b>
    <p>carrera:${perfil.carrera}</p>
    <p>semestre:${perfil.semestre}</p>
    <p>universidad:${perfil.universidad}</p>
    <p>ciudad:${perfil.ciudad}</p>
    <p>interes:${perfil.interes}</p>
    `;
    contenedorPrincipal.appendChild(contenedorPerfil);
}
obtenerDatos();
