document.querySelector('#buscarColombia').addEventListener('click', function(){
    obtenerDatos()
})
document.querySelector('#buscarCovid').addEventListener('click', function(){
    obtenerDatosCovid()
})

function obtenerDatos(){
 const url ='https://s3.amazonaws.com/dolartoday/data.json'
 fetch(url)
 .then(response=>response.json())
 .then(data=>{
    let element1 = document.getElementById('efectivo')
    let efec =  `<p>Valor del dolar: ${data.USDCOL.setfxsell}</p>`
    element1.innerHTML = efec

    let element2 = document.getElementById('transfe')
    let trans =  `<p>Valor a comprar el dolar: ${data.USDCOL.setfxbuy}</p>`
    element2.innerHTML = trans

   /*let element3 = document.getElementById('compra')
    let compra =  `<p>Total de compras: ${data.USDCOL.compra}</p>`
    element3.innerHTML = compra

    let element4 = document.getElementById('ventas')
    let venta =  `<p>Total de ventas: ${data.USDCOL.venta}</p>`
    element4.innerHTML = venta*/



     console.log(data)
 })
 .catch(error=>console.log(error))
}
function obtenerDatosCovid(){
    const url ='https://api.misdatos.com.co/api/covid'
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
       let element1 = document.getElementById('casos')
       let efec =  `<p>Cantidad de casos confirmados en todo el mundo: ${data.data.confirmedCases}</p>`
       element1.innerHTML = efec
      
       let element2 = document.getElementById('fallecidos')
       let trans =  `<p>Cantidad de pesonas fallecidas: ${data.data.deaths}</p>`
       element2.innerHTML = trans
   
   
   
        console.log(data)
    })
    .catch(error=>console.log(error))
}

