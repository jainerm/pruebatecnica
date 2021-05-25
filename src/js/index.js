// Variables globales
gcAlto = document.documentElement.clientHeight;
gcAncho = document.documentElement.clientWidth;

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(registration => {
        console.log("SW registrado!");
        console.log(registration);
        console.log(gcAlto);
        console.log(gcAncho);

    }).catch(error => {
        console.log("SW no registrado...");
        console.log(error);
    });
}

var registro = () => {
    // Ocultar menu
    $(document).ready(function () {
        $('#page-content').load('src/forms/acercade.html');
    });
}

// Cargar el modulo js con los componentes 
var valingreso = (cOpcion) => {
  switch(cOpcion) {
    case "alquilar":
        // Ocultar menu
        $(document).ready(function () {
            if(gcAncho < 1024)  // Pantalla movil o tablet
               ocultarmenu();
               $('#page-content').load('src/forms/alquileraeronave.html');
            });
    break; 
    case "ingresar":
        var cUsuario = document.getElementById('cUsuarioIngreso').value;
        if(cUsuario.trim() === "" || esFormatoCorreo(cUsuario) !== true) {
            document.getElementById('msgUsuarioIngreso').style.display = "inline";
            if(cUsuario.trim() === "") {
              document.getElementById('msgUsuarioIngreso').innerHTML = "Debe indicar el correo electrónico.";
            } else {
              document.getElementById('msgUsuarioIngreso').innerHTML = "Error de usuario";
            }
          return false;
        }
        // Ocultar menu
        $(document).ready(function () {
            if(gcAncho < 1024)  // Pantalla movil o tablet
               ocultarmenu();
            $('#page-content').load('src/forms/alquilaraeronave.html');
        });
    break; 
    case "registro":
        // Ocultar menu
        $(document).ready(function () {
            if(gcAncho < 1024)  // Pantalla movil o tablet
               ocultarmenu();
            $('#page-content').load('src/forms/registrarse.html');
        });
    break; 
    case "admin_roles":
        // Ocultar menu
        $(document).ready(function () {
            if(gcAncho < 1024)  // Pantalla movil o tablet
               ocultarmenu();
            $('#page-content').load('src/forms/administraroles.html');
        });
    break; 
    case "crea_aeronave":
        // Ocultar menu
        $(document).ready(function () {
            if(gcAncho < 1024)  // Pantalla movil o tablet
               ocultarmenu();
            $('#page-content').load('src/forms/crearaeronaves.html');
        });
    break; 
    case "admin_perfiles":
    break; 
    case "acercade":
        // Ocultar menu
        $(document).ready(function () {
            if(gcAncho < 1024)  // Pantalla movil o tablet
               ocultarmenu();
            $('#page-content').load('src/forms/acercade.html');
        });
    break; 
  }
} 

var mostrarmenu = () => {
    //console.log("Mostrar menu...");
    document.getElementById('menulateral').style.left = "0%";
    document.getElementById('menulateral').style.width = "200px";
    document.getElementById('menulateral').style.display="block";
}

var ocultarmenu = () => {
    //console.log("Ocultar menu...");
    document.getElementById('menulateral').style.left = 0;
    document.getElementById('menulateral').style.width = 0;
    document.getElementById('menulateral').style.display="none";
}

var fveraeronave = (cValor) => {
    var oImg = document.getElementById("verAeronave");
    if(cValor == "--")
       cFileImg = "src/aeronaves/enblanco.png"; 
    else 
       cFileImg = "src/aeronaves/" + cValor + ".png";
    oImg.src = cFileImg;
}

var esFormatoCorreo = (cValor) => {
    var email = cValor;
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(email)) {
        return false;
    }
    return true;
} 