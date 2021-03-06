var boton = document.getElementById("ingresar")
boton.addEventListener("click", login);

var boton = document.getElementsByName("se")
boton.addEventListener("click", cerrar);

var inicio = String
var sesion = String
var m =String
var encontrado = null
function login() {
    let user = document.getElementById("usuario_l").value;
    let pass = document.getElementById("pass_l").value;

    if ((user.length == 0) & (pass.length == 0)) {
        alert("Llenar ambos campos")
    }
    else if (user.length == 0) {
        alert("Ingrese un usuario")

    } else if (pass.length == 0) {

        alert("Ingrese una contraseña")
    } else {

        fetch('../js/datos.json')

            .then(function (respuesta) {
                return respuesta.json()
            })

            .then(function (data) {
                data.forEach(function (datos) {
                    if (datos.usuario == user) {
                        if (datos.clave == pass) {
                            alert("Bienvenido señor/a: " + datos.nombre + " " + datos.apellidos)
                            inicio = (datos.nombre) + " " + (datos.apellidos)
                            sesion="Cerrar sesión"
                            localStorage.setItem("Nombres", inicio);
                            localStorage.setItem("Inicio", sesion);
                            encontrado = true
                            window.location = '../index.htm'
                        } else {
                            alert("Contraseña incorrecta")
                            encontrado = true
                        }
                    }
                })
                if (encontrado == null) {
                    alert("Usuario incorrecto")
                }
            })
            .catch(function (error) {
                alert(error)
            })
    }
}
function mostrar() {   
    var nom = localStorage.getItem("Nombres")
    var sesion2 = localStorage.getItem("Inicio")
    document.getElementById('nombre').innerHTML = "Bienvenido: " + nom;
    document.getElementById('iniciar_se').innerHTML =  sesion2;
}

function cerrar() {
    window.localStorage.clear();
    localStorage.setItem("Inicio", "Iniciar sesion");
}


