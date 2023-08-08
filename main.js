
const productos = [];

class Producto {
    constructor (nombre, precio, volumen, stock, tipo, id){
        this.nombre = nombre;
        this.precio = precio;
        this.volumen = volumen;
        this.stock = stock;
        this.tipo = tipo;
        this.id = id;
    }
}

const jackDaniels = new Producto ('Jack Daniel\'s Old No. 7', 14400, 750, 17, 'Bourbon',0);
const jWRed = new Producto ('Johnnie Walker Red Label', 8600, 1000, 24, 'Scotch Blend', 1);
const oldParr = new Producto ('Old Parr 12', 9900, 750, 29, 'Scotch Blend', 2);
const jWGold = new Producto ('Johnny Walker Gold Label', 24900, 750, 36, 3);
const famGrouse = new Producto ('Famous Grouse', 9800, 750, 19, 'Scotch Blend', 4);

productos.push(jackDaniels, jWRed, oldParr, jWGold, famGrouse);

// console.log(productos);

const productosOrdenadosAZ = productos.slice().sort((a, b) =>{
    if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
        return -1;
    } else if (a.nombre.toLowerCase() > b.nombre.toLowerCase()){
        return 1;
    } else {
        return 0;
    }
})

// console.log(productosOrdenadosAZ)



let mensaje = '';

productosOrdenadosAZ.forEach((producto) => {
    if(producto.stock > 0)
    mensaje += producto.nombre + ', de ' + producto.volumen + ' ml. a $' + producto.precio + '\n'

})

const inicio = function(){
    let usuario = prompt('Bienvenido, ingresa tu nombre');
    return `Hola ${usuario}, ingreasa tu edad`;
}

const validEdad = parseInt(prompt(inicio()));


if(validEdad >= 18){

    const selectProd = prompt(`Bienvenido, estos son los productos en stokc:\n\n ${mensaje}\nEscriba en nombre del producto que desea comprar`);
    console.log(selectProd)
    const productoSelect = productosOrdenadosAZ.find((producto) => producto.nombre === selectProd);
    console.log(productoSelect)

    if(productoSelect == undefined){
        alert('No ingresaste un producto en stock');
        
    }else if(productoSelect.nombre === selectProd){
        alert(`Seleccionaste el producto ${productoSelect.nombre} con un valor de $ ${productoSelect.precio}.\n\nSu producto se encuentra en camino\n\nGracias por su compra`);
        
    }else{
        alert('No ingresaste un producto en stock');
        
    }

} else if (validEdad < 18){
    alert('No puedes comprar en esta tienda')

} else{
    alert('No ingresaste un dato valido')
}
