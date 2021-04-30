var ListaProductos = [];


function agregarProductoslSistema(pcodigo, pnombre, pprecio){
    
    var NuevoProducto ={
        codigo : pcodigo,
        nombre : pnombre,
        precio : pprecio,        
    };
    console.log(NuevoProducto )
    ListaProductos.push(NuevoProducto);
    localStorageListaProductos(ListaProductos);
}

function obtenerListaProducto(){
    var storedLista = localStorage.getItem('localListaProductos');
    if(storedLista == null){
        ListaProductos =[];
    }else{
        ListaProductos = JSON.parse(storedLista);
    }
    return ListaProductos;
}
//la p es de parametros
function localStorageListaProductos(plista){
    localStorage.setItem('localListaProductos', JSON.stringify(plista));
}