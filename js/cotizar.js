
function cotizar(){
    txtcodigo= document.getElementById("txtcodigoPro").value
    txtcantiPro = document.getElementById("txtcantidad").value
    
    if(txtcodigo=="" || txtcantiPro==""){
        alert("Llene todos los campos")
    }else{
        var pagar=0
        if(txtcodigo==00001){
            pagar=txtcantiPro*18900
            document.getElementById("h2_contizar").innerHTML="Valor a Pagar: "+pagar
        }else if(txtcodigo==00002){
            pagar=txtcantiPro*449000
            document.getElementById("h2_contizar").innerHTML="Valor a Pagar: "+pagar
        }else if(txtcodigo==00003){
            pagar=txtcantiPro*279000
            document.getElementById("h2_contizar").innerHTML="Valor a Pagar: "+pagar
        }else if(txtcodigo==00004){
            pagar=txtcantiPro*149000
            document.getElementById("h2_contizar").innerHTML="Valor a Pagar: "+pagar
        }else if(txtcodigo==00005){
            pagar=txtcantiPro*37900
            document.getElementById("h2_contizar").innerHTML="Valor a Pagar: "+pagar
        }else if(txtcodigo==00006){
            pagar=txtcantiPro*34900
            document.getElementById("h2_contizar").innerHTML="Valor a Pagar: "+pagar
        }else{
            alert("Este código de la herramienta no esta disponible")

        }
    }
}