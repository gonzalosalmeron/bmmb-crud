/************** OCULTAR Y MOSTRAR ELEMENTOS ******************/

function ocultar(id) {
    var elemento = document.getElementById(id);
    elemento.style.display = "none";
}

function mostrar(id) {
    var elemento = document.getElementById(id);
    elemento.style.display = "inline";
}

/************** BARRA DE NAVEGACIÓN ******************/

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}