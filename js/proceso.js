
var nombreApe = String
var sesion = String
var m = String
var encontrado = null
var Veccedula=[],Vecnombre=[],Vecapellido=[],Vecdepartamento=[],Vecciudad=[],Vecmunicipio=[],Vecdireccion=[],VeccodigoPostal=[],Vectelefono=[],Veccorreo=[],Vecsituacion=[],Vecencontraste=[],Vecsugerencia=[];
function IniciarSesion() {
    let user = document.getElementById("usuario_l").value;
    let pass = document.getElementById("pass_l").value;

    if ((user.length == 0) & (pass.length == 0)) {
        alert("Por favor llene todos los campos");

    } else {
        if ((user.length >= 4) & (pass.length >= 4)) {
            if (user.length == 0) {
                alert("Por favor ingrese un usuario");
            } else if (pass.length == 0) {
                alert("Por favor ingrese una contraseña")

            }else{
                fetch('../js/datos.json')

                    .then(function (respuesta) {
                        return respuesta.json()
                    })

                    .then(function (dato) {
                        dato.forEach(function (datos) {
                            if (datos.usuario == user) {
                                if (datos.clave == pass) {
                                    alert("Bienvenido señor/a: " + datos.nombre + " " + datos.apellidos)
                                    nombreApe = (datos.nombre) + " " + (datos.apellidos)
                                    sesion = "Cerrar sesión"
                                    localStorage.setItem("nombre_Ape", nombreApe);
                                    localStorage.setItem("Inicio", sesion);
                                    encontrado = true
                                    window.location = '../index.htm'
                                } else {
                                    alert("Contraseña incorrecta")
                                    encontrado = false
                                }
                            }
                        })
                    })
                    .catch(function (error) {
                        alert(error)
                    })
            }
        } else {
            alert("Por favor ingrese nás de 4 caracteres")

        }
    }

}
function cargarDatos() {
    var nom = localStorage.getItem("nombre_Ape")
    var sesion2 = localStorage.getItem("Inicio")
    if(sesion2 == null){
        document.getElementById('iniciar_se').innerHTML = "Iniciar sesión";
    }else{
        document.getElementById('nombre_usu').innerHTML = nom;
        document.getElementById('iniciar_se').innerHTML = sesion2;
    }
    
}

function cerrarSesion() {
    localStorage.removeItem("nombre_Ape")
    localStorage.setItem("Inicio", "Iniciar sesión");
}


function guardarContacto(){
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var cedula=document.getElementById("txtCedula").value;
    var departamento = document.getElementById("txtDepartamento").value;
    var ciudad = document.getElementById("txtCiudad").value;
    var municipio = document.getElementById("txtMunicipio").value;
    var direccion = document.getElementById("txtDireccion").value;
    var codigoPostal = document.getElementById("txtPostal").value;
    var telefono = document.getElementById("txtTelefono").value;
    var correo = document.getElementById("txtCorreo").value;
    var situacion = document.getElementById("txtSituacion").value;
    var encontraste = document.getElementById("txtEncontraste").value;
    var sugerencia = document.getElementById("txtSugerencia").value;

    if(nombre.length<=0 || apellido.length<=0 || cedula<=0|| departamento.length<=0 ||ciudad.length<=0 || municipio<=0 || direccion.length<=0 ||
         codigoPostal.length<=0 || telefono.length<=0 || correo.length<=0 ||situacion.length<=0 || encontraste.length<=0 || sugerencia.length<=0){
             alert("Por favor llene todos los campos")
    }else{
        Vecnombre.push(nombre);
        Vecapellido.push(apellido);
        Veccedula.push(cedula)
        Vecdepartamento.push(departamento);
        Vecciudad.push(ciudad);
        Vecmunicipio.push(municipio);
        Vecdireccion.push(direccion);
        VeccodigoPostal.push(codigoPostal);
        Vectelefono.push(telefono);
        Veccorreo.push(correo);
        Vecsituacion.push(situacion);
        Vecencontraste.push(encontraste);
        Vecsugerencia.push(sugerencia)
     
        localStorage.setItem('Nombre',JSON.stringify(Vecnombre));
        localStorage.setItem('Apellidos',JSON.stringify(Vecapellido))
        localStorage.setItem('Cedulas',JSON.stringify(Veccedula))
        localStorage.setItem('Departamentos',JSON.stringify(Vecdepartamento))
        localStorage.setItem('Ciudades',JSON.stringify(Vecciudad))
        localStorage.setItem('Municipio',JSON.stringify(Vecmunicipio))
        localStorage.setItem('Direccion',JSON.stringify(Vecdireccion))
        localStorage.setItem('CodigoP',JSON.stringify(VeccodigoPostal))
        localStorage.setItem('Telefono',JSON.stringify(Vectelefono))
        localStorage.setItem('Correos',JSON.stringify(Veccorreo))
        localStorage.setItem('Situacion',JSON.stringify(Vecsituacion))
        localStorage.setItem('Encontraste',JSON.stringify(Vecencontraste))
        localStorage.setItem('Sugerencia',JSON.stringify(Vecsugerencia))
        alert("Registrado exitosamente")
        limpiar_con();
        }
}

function limpiar_con(){
    document.getElementById("txtNombre").value="";
    document.getElementById("txtApellido").value="";
    document.getElementById("txtCedula").value="";
    document.getElementById("txtDepartamento").value="";
    document.getElementById("txtCiudad").value="";
    document.getElementById("txtMunicipio").value="";
    document.getElementById("txtDireccion").value="";
    document.getElementById("txtPostal").value="";
    document.getElementById("txtTelefono").value="";
    document.getElementById("txtCorreo").value="";
    document.getElementById("txtSituacion").value="";
    document.getElementById("txtEncontraste").value="";
    document.getElementById("txtSugerencia").value="";
}
