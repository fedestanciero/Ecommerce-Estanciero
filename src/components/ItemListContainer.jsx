import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import {useState, useEffect} from "react"


// export default function ListadoProductos ({productos="productos"}){
//     return(
//         <>
//         <h1>{productos}</h1>
//         <ItemCount stock={5} initial={1} onAdd={(count)=>console.log(`${count} unidad/es agregada/s al pedido`)} />
//         <ItemList/>
//         </>
//     )
// }

const products = [
    {
        "nombre": "Funko Pop! Marvel Absolute Carnage",
        "precio": 7600,
        "categoria": "Funko Pop!",
        "id": 1,
        "licencia": "Marvel",
        "destacado": true,
        "imagen": "../../imagenes/productos/funko-pop_marvel_absolute-carnage.jpg"
    },
    {
        "nombre": "Funko Pop! Marvel Spiderman Miles Morales",
        "precio": 3500,
        "categoria": "Funko Pop!",
        "id": 2,
        "licencia": "Marvel",
        "destacado": true,
        "imagen": "../../imagenes/productos/funko-pop_marvel_miles-morales.jpg"
    },
    {
        "nombre": "Funko Pop! Marvel Ironheart",
        "precio": 3300,
        "categoria": "Funko Pop!",
        "id": 3,
        "licencia": "Marvel",
        "destacado": false,
        "imagen": "../../imagenes/productos/funko-pop_marvel_ironheart.jpg"
    },
    {
        "nombre": "Funko Pop! Marvel Thanos",
        "precio": 4000,
        "categoria": "Funko Pop!",
        "id": 4,
        "licencia": "Marvel",
        "destacado": false,
        "imagen": "../../imagenes/productos/funko-pop_marvel_thanos.jpg"
    },
    {
        "nombre": "Funko Pop! Marvel Hulk Deluxe",
        "precio": 6000,
        "categoria": "Funko Pop!",
        "id": 5,
        "licencia": "Marvel",
        "destacado": false,
        "imagen": "../../imagenes/productos/funko-pop_marvel_hulk_deluxe.jpg"
    },
    {
        "nombre": "Funko Pop! Marvel Thanos 80 years",
        "precio": 7000,
        "categoria": "Funko Pop!",
        "id": 6,
        "licencia": "Marvel",
        "destacado": true,
        "imagen": "../../imagenes/productos/funko-pop_marvel_thanos-80-years.jpg"
    }
]


export default function ItemListContainer (){

    // Voy a usar el useState para meter en product los productos que obtengo del json
    const [product, setProduct] = useState([]);

    // En la variable getProducts obtengo mis productos mediante una promise con un delay de 2seg
        
     const getProducts = new Promise ((resolve) => {
         setTimeout(() => {
             resolve(products);
         },2000)
     })

     useEffect(() => {
         getProducts
         .then(item => setProduct(item))
         .catch(error => console.log(error))
     })

    return(
        <div className="itemList">
            <ItemList product={product}/>
        </div>
    )
}