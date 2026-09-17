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
    <img class="imagen-personaje" src="${p.image}" alt="${p.actor}">
    <h2>${p.name}</h2>
    <p><b>casa:</b>${p.house}</p>
    <p><b>especie:</b>${p.species}</p>
    <p><b>genero:</b>${p.gender}</p>
    <p><b>Ascendencia:</b>${p.ancestry}</p>
    <p><b>color de ojos:</b>${p.eyeColour}</p>
    <p><b>Actor:</b>${p.actor}</p>
    <p><b>fecha nacimiento:</b>${p.dateOfBirth}</p>
    `;

    const imagen = contenedor.querySelector('.imagen-personaje');

    imagen.addEventListener('click', ()=>{
        mostrarPersonaje(p);
    });

    contenedorPrincipal.appendChild(contenedor);

}

function mostrarPersonaje(p){

    const InformacionInterPersonajes={

   "Harry Potter": `
        <p><b>Descripcion:</b> Harry Potter es un joven mago que descubre que es famoso en el mundo mágico por haber sobrevivido al ataque de Voldemort.</p>
        <p><b>Se dedica a:</b> Estudiar magia en Hogwarts y aprender a utilizar sus habilidades como mago.</p>
        <p><b>Rol en la historia:</b> Es el protagonista principal y el personaje que enfrenta directamente a Voldemort.</p>
    `,

    "Hermione Granger": `
        <p><b>Descripción:</b> Hermione Granger es una estudiante muy inteligente, dedicada y con grandes conocimientos de magia.</p>
        <p><b>Se dedica a:</b> Estudiar y aprender diferentes ramas de la magia en Hogwarts.</p>
        <p><b>Rol en la historia:</b> Es una de las mejores amigas de Harry y lo ayuda a resolver problemas durante sus aventuras.</p>
    `,

    "Ron Weasley": `
        <p><b>Descripción:</b> Ron Weasley es un joven mago perteneciente a la familia Weasley y uno de los mejores amigos de Harry.</p>
        <p><b>Se dedica a:</b> Estudiar en Hogwarts y acompañar a Harry y Hermione en sus aventuras.</p>
        <p><b>Rol en la historia:</b> Es uno de los protagonistas y forma parte del grupo principal de amigos de Harry.</p>
    `,

    "Draco Malfoy": `
        <p><b>Descripción:</b> Draco Malfoy es un estudiante de Slytherin perteneciente a una familia de magos de sangre pura.</p>
        <p><b>Se dedica a:</b> Estudiar magia en Hogwarts y seguir las tradiciones de su familia.</p>
        <p><b>Rol en la historia:</b> Es uno de los principales rivales de Harry durante sus años en Hogwarts.</p>
    `,

    "Minerva McGonagall": `
        <p><b>Descripción:</b> Minerva McGonagall es una bruja experta, estricta y dedicada a la educación de los estudiantes.</p>
        <p><b>Se dedica a:</b> Enseñar Transformaciones y trabajar como profesora en Hogwarts.</p>
        <p><b>Rol en la historia:</b> Es una profesora y miembro importante del personal de Hogwarts que ayuda a proteger la escuela.</p>
    `,

    "Cedric Diggory": `
        <p><b>Descripción:</b> Cedric Diggory es un estudiante de Hufflepuff conocido por ser responsable, amable y talentoso.</p>
        <p><b>Se dedica a:</b> Estudiar en Hogwarts y participar en actividades escolares como el equipo de Quidditch.</p>
        <p><b>Rol en la historia:</b> Participa en el Torneo de los Tres Magos y se convierte en una figura importante durante Harry Potter y el cáliz de fuego.</p>
    `,

    "Cho Chang": `
        <p><b>Descripción:</b> Cho Chang es una estudiante de Ravenclaw y una talentosa jugadora de Quidditch.</p>
        <p><b>Se dedica a:</b> Estudiar en Hogwarts y jugar Quidditch.</p>
        <p><b>Rol en la historia:</b> Tiene una relación cercana con Harry y participa posteriormente en la resistencia contra Voldemort.</p>
    `,

    "Severus Snape": `
        <p><b>Descripción:</b> Severus Snape es un profesor de Hogwarts con una personalidad seria y misteriosa.</p>
        <p><b>Se dedica a:</b> Enseñar Pociones y posteriormente ocupar el cargo de director de Hogwarts.</p>
        <p><b>Rol en la historia:</b> Es un personaje fundamental cuya verdadera lealtad y decisiones tienen gran importancia en la historia.</p>
    `,

    "Rubeus Hagrid": `
        <p><b>Descripción:</b> Rubeus Hagrid es un semigigante de gran tamaño que siente un profundo cariño por las criaturas mágicas.</p>
        <p><b>Se dedica a:</b> Trabajar en Hogwarts como guardabosques y enseñar Cuidado de Criaturas Mágicas.</p>
        <p><b>Rol en la historia:</b> Es uno de los primeros personajes que introduce a Harry en el mundo mágico y se convierte en un gran amigo suyo.</p>
    `,

    "Neville Longbottom": `
        <p><b>Descripción:</b> Neville Longbottom es un estudiante de Gryffindor que inicialmente es inseguro, pero desarrolla gran valentía.</p>
        <p><b>Se dedica a:</b> Estudiar magia y aprender sobre plantas mágicas.</p>
        <p><b>Rol en la historia:</b> Evoluciona hasta convertirse en un personaje valiente y participa en la lucha contra Voldemort.</p>
    `,

    "Luna Lovegood": `
        <p><b>Descripción:</b> Luna Lovegood es una estudiante de Ravenclaw conocida por su personalidad particular y su imaginación.</p>
        <p><b>Se dedica a:</b> Estudiar en Hogwarts y apoyar a sus amigos.</p>
        <p><b>Rol en la historia:</b> Se convierte en una aliada importante de Harry y participa en la resistencia contra Voldemort.</p>
    `,

    "Ginny Weasley": `
        <p><b>Descripción:</b> Ginny Weasley es la hermana menor de Ron y una bruja talentosa de la familia Weasley.</p>
        <p><b>Se dedica a:</b> Estudiar en Hogwarts y jugar Quidditch.</p>
        <p><b>Rol en la historia:</b> Se convierte en una importante aliada de Harry y participa activamente en la lucha contra Voldemort.</p>
    `,

    "Sirius Black": `
        <p><b>Descripción:</b> Sirius Black es el padrino de Harry y uno de los mejores amigos que tuvo James Potter.</p>
        <p><b>Se dedica a:</b> Apoyar y proteger a Harry después de recuperar su libertad.</p>
        <p><b>Rol en la historia:</b> Es una figura familiar importante para Harry y le proporciona información sobre sus padres y su pasado.</p>
    `,

    "Remus Lupin": `
        <p><b>Descripción:</b> Remus Lupin es un mago inteligente y amable que fue amigo de los padres de Harry.</p>
        <p><b>Se dedica a:</b> Enseñar Defensa Contra las Artes Oscuras en Hogwarts.</p>
        <p><b>Rol en la historia:</b> Es uno de los profesores que ayuda a Harry y también participa en la lucha contra Voldemort.</p>
    `,

    "Arthur Weasley": `
        <p><b>Descripción:</b> Arthur Weasley es el padre de Ron y miembro de una familia de magos conocida por su cercanía con Harry.</p>
        <p><b>Se dedica a:</b> Trabajar en el Ministerio de Magia y estudiar los objetos utilizados por los muggles.</p>
        <p><b>Rol en la historia:</b> Es un aliado de Harry y miembro de la Orden del Fénix.</p>
    `,

    "Bellatrix Lestrange": `
        <p><b>Descripción:</b> Bellatrix Lestrange es una bruja extremadamente leal a Voldemort y perteneciente a una familia de magos de sangre pura.</p>
        <p><b>Se dedica a:</b> Servir a Voldemort y realizar misiones para los Mortífagos.</p>
        <p><b>Rol en la historia:</b> Es una de las principales antagonistas y participa en varios enfrentamientos importantes.</p>
    `,

    "Lord Voldemort": `
        <p><b>Descripción:</b> Lord Voldemort es un poderoso mago oscuro que busca conquistar el mundo mágico.</p>
        <p><b>Se dedica a:</b> Practicar magia oscura y reunir seguidores para recuperar su poder.</p>
        <p><b>Rol en la historia:</b> Es el principal antagonista y enemigo de Harry Potter.</p>
    `,

    "Horace Slughorn": `
        <p><b>Descripción:</b> Horace Slughorn es un profesor de Hogwarts conocido por sus conexiones con estudiantes talentosos.</p>
        <p><b>Se dedica a:</b> Enseñar Pociones en Hogwarts.</p>
        <p><b>Rol en la historia:</b> Posee información importante sobre el pasado de Voldemort y ayuda a Harry y Dumbledore.</p>
    `,

    "Kingsley Shacklebolt": `
        <p><b>Descripción:</b> Kingsley Shacklebolt es un mago experimentado y miembro de la comunidad mágica británica.</p>
        <p><b>Se dedica a:</b> Trabajar como auror y combatir amenazas relacionadas con la magia oscura.</p>
        <p><b>Rol en la historia:</b> Es miembro de la Orden del Fénix y participa en la lucha contra Voldemort.</p>
    `,

    "Dolores Umbridge": `
        <p><b>Descripción:</b> Dolores Umbridge es una funcionaria del Ministerio de Magia con una personalidad autoritaria.</p>
        <p><b>Se dedica a:</b> Trabajar para el Ministerio de Magia y ejercer funciones administrativas y educativas.</p>
        <p><b>Rol en la historia:</b> Se convierte en una antagonista de Harry durante su periodo de control sobre Hogwarts.</p>
    `,

    "Lucius Malfoy": `
        <p><b>Descripción:</b> Lucius Malfoy es el padre de Draco y un mago perteneciente a una familia de sangre pura.</p>
        <p><b>Se dedica a:</b> Administrar sus asuntos familiares y servir a Voldemort.</p>
        <p><b>Rol en la historia:</b> Es un antagonista y uno de los Mortífagos relacionados con la familia Malfoy.</p>
    `,

    "Vincent Crabbe": `
        <p><b>Descripción:</b> Vincent Crabbe es un estudiante de Slytherin y compañero de Draco Malfoy.</p>
        <p><b>Se dedica a:</b> Estudiar en Hogwarts y acompañar a Draco.</p>
        <p><b>Rol en la historia:</b> Es uno de los estudiantes que suele actuar como seguidor y compañero de Draco.</p>
    `,

    "Gregory Goyle": `
        <p><b>Descripción:</b> Gregory Goyle es un estudiante de Slytherin y compañero de Draco Malfoy.</p>
        <p><b>Se dedica a:</b> Estudiar en Hogwarts y acompañar a Draco.</p>
        <p><b>Rol en la historia:</b> Es uno de los compañeros de Draco y participa en diferentes conflictos entre Slytherin y Gryffindor.</p>
    `,

    "Mrs Norris": `
        <p><b>Descripción:</b> Mrs Norris es la gata de Argus Filch y suele vigilar los pasillos de Hogwarts.</p>
        <p><b>Se dedica a:</b> Acompañar a Filch y vigilar a los estudiantes.</p>
        <p><b>Rol en la historia:</b> Ayuda a Filch a controlar y localizar estudiantes que incumplen las reglas de Hogwarts.</p>
    `,

    "Argus Filch": `
        <p><b>Descripción:</b> Argus Filch es el celador de Hogwarts y se caracteriza por su estricta actitud hacia los estudiantes.</p>
        <p><b>Se dedica a:</b> Mantener el orden y vigilar que los estudiantes cumplan las reglas de Hogwarts.</p>
        <p><b>Rol en la historia:</b> Es el encargado de perseguir a los estudiantes que infringen las normas de la escuela.</p>
    `

};








    const modal = document.createElement('div');
    modal.className = 'modal';

    modal.style.display = 'flex';

    modal.innerHTML = `
        <div class="modal-contenido">

            <span id="cerrar">&times;</span>

            <img src="${p.image}" alt="${p.actor}">

            <div class="modal-informacion">

                <h2>${p.name}</h2>
                ${InformacionInterPersonajes[p.name] || '<p>No hay información disponible para el personaje.</p>'}

            </div>

        </div>
    `;

    document.body.appendChild(modal);

    const cerrar = modal.querySelector('#cerrar');

    cerrar.addEventListener('click', ()=>{
        modal.remove();
    });

}

getDatos()