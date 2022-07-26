// const productos = [
//     {id: 1, name: "trufa", price:150, stock: 5, image: 'https://definicion.de/wp-content/uploads/2012/11/trufa-1.jpg' },
//     {id: 2, name: "aceite de oliva", price:20, stock: 10, image: 'https://http2.mlstatic.com/D_NQ_NP_841076-MLA43642883689_102020-V.jpg' },
//     {id: 3, name: "papa", price:10, stock: 2, image: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/09/papa.jpg?resize=1080%2C608&quality=80&ssl=1'},

// ]

let p1 = {id: 1, name: "trufa", price:150, stock: 5, image: 'https://definicion.de/wp-content/uploads/2012/11/trufa-1.jpg' }
let p2 = {id: 2, name: "aceite de oliva", price:20, stock: 10, image: 'https://http2.mlstatic.com/D_NQ_NP_841076-MLA43642883689_102020-V.jpg' }
let p3 = {id: 3, name: "papa", price:10, stock: 2, image: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/09/papa.jpg?resize=1080%2C608&quality=80&ssl=1'}
let p4 = {id: 4, name: "asado", price:100, stock: 20, image: 'https://http2.mlstatic.com/D_NQ_NP_841076-MLA43642883689_102020-V.jpg' }
let p5 = {id: 5, name: "harina", price:5, stock: 30, image: 'https://http2.mlstatic.com/D_NQ_NP_841076-MLA43642883689_102020-V.jpg' }

let productos =[];
productos.push(p1);
productos.push(p2);
productos.push(p3);
productos.push(p4);
productos.push(p5);

const Productos = (resolution, delay) => {
    let promesa = new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            if (resolution) {
                resolve(productos)
            } else {
                reject("No se pudo encontrar el productos seleccionado, disculpe las molestias.")
            }
        }, delay);
    });
    console.log ("Productos");
    console.log (productos);
    console.log ("Promesa");
    console.log (promesa);
    return (promesa)

}

export default Productos
