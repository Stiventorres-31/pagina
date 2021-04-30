document.querySelector('#btnGuardar').addEventListener('click', GuardarProducto);
var btnEditar = document.getElementById("btnEditar").addEventListener('click',EditarProducto)
var btnGuardar = document.getElementById("btnGuardar")
ProductoEnTabla();
btnEditar.disabled = false;//no habilitado editar
function GuardarProducto(){
    var sCodigo = document.querySelector('#txtcodigoProNu').value,
        sNombre = document.querySelector('#txtnombrePro').value,
        sPrecio = document.querySelector('#txtPrecioProNue').value;

    if(sCodigo=="" || sNombre=="" || sPrecio==""){
        alert("Hay campos en blanco")
    }else{
        agregarProductoslSistema(sCodigo,sNombre,sPrecio);
        ProductoEnTabla();
        limpiar()
    }
}
function EditarProducto(){
    var sCodigo = document.querySelector('#txtcodigoProNu').value,
        sNombre = document.querySelector('#txtnombrePro').value,
        sPrecio = document.querySelector('#txtPrecioProNue').value;

    if(sCodigo=="" || sNombre=="" || sPrecio==""){
        alert("Hay campos en blanco")
    }else{
        localStorageEditarProductos(sCodigo,sNombre,sPrecio);
        ProductoEnTabla();
        limpiar()
    }
}
function ProductoEnTabla(){
    var lista = obtenerListaProducto(),
    tbody = document.querySelector('#TablaPro tbody');
    
tbody.innerHTML = '';

    for(var i = 0; i < lista.length; i++){
        var row = tbody.insertRow(i),
            codigoCelda = row.insertCell(0),               //Estas son las celdas de la tabla
            nombreCelda = row.insertCell(1),
            precioCelda = row.insertCell(2);
            selectCelda = row.insertCell(3);
            selectCelda.innerHTML =  `<a class="btn btn-warning mx-5 " onClick="onEdit(this)">Editar</a>
            <a class= "btn btn-danger " onClick="onDelete(this)">Eliminar</a>`;



        codigoCelda.innerHTML = lista[i].codigo;
        nombreCelda.innerHTML = lista[i].nombre;
        precioCelda.innerHTML = lista[i].precio;
        tbody.appendChild(row);

    }
}
function onEdit(td){
    ///cambio de botones
    //btnEditar.disabled = true;
    btnGuardar.disabled = true;
    selectedRow = td.parentElement.parentElement;
    document.getElementById("txtcodigoProNu").value = selectedRow.cells[0].innerHTML;
    document.getElementById("txtnombrePro").value = selectedRow.cells[1].innerHTML;
    document.getElementById("txtPrecioProNue").value = selectedRow.cells[2].innerHTML;
}
function limpiar(){
    document.getElementById("txtcodigoProNu").value = "";
    document.getElementById("txtnombrePro").value = "";
    document.getElementById("txtPrecioProNue").value = "";
    btnEditar.disabled = false;
    btnGuardar.disabled = true;
    
}
