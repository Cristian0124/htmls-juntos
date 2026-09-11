const botonHarry= document.getElementById('harry');
const botonTL = document.getElementById('tl');
const botonPerfil= document.getElementById('perfil');
const iframe = document.querySelector('iframe');


/* funcionamiento de botones */
botonHarry.addEventListener('click',()=>{
    iframe.src="harry/index.html";
}
);
botonTL.addEventListener('click',()=>{
    iframe.src="tl/index.html";
}
);
botonPerfil.addEventListener('click',()=>{
    iframe.src="perfil/index.html";
}   
);

