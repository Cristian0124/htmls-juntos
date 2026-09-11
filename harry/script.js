const contenedorPrincipal = document.getElementById('datosprincipal');


async function getDatos(){
    console.log('caso 1');
    try{
    const respuestaDeDatos = await fetch('https://hp-api.onrender.com/api/characters');
    console.log(respuestaDeDatos);
    const datosHarry = await respuestaDeDatos.json();
    console.log(datosHarry);

    datosHarry.forEach((personaje)=>{
        if(personaje.image != ""){
            crearPersonajes(personaje);
        }
    });

    }catch(error){
        console.error("esta fallando en: ", error)
    }
}
function crearPersonajes(p){
    const contenedor = document.createElement('div');
    contenedor.className = 'card';

    contenedor.innerHTML=`
    <img src="${p.image}"  alt="${p.actor}">
    <h2>${p.name}</h2>
    <p><b>casa:</b>${p.house}</b>   
    <p><b>especie:</b>${p.species}</b>
    <p><b>genero:</b>${p.gender}</b>
    <p><b>Ascendencia:</b>${p.ancestry}</p>
    <p><b>color de ojos:</b>${p.eyeColour}</p>
    <p><b>Actor:</b>${p.actor}</p>
    <p><b>fecha nacimiento:</b>${p.dateOfBirth}</p>



    `;
    contenedorPrincipal.appendChild(contenedor);

}

getDatos()