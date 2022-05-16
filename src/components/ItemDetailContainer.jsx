import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import {products} from "./ItemListContainer"

const findItem = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            const itemDetail = id ? products.find(product => product.id === id) : products
            resolve (itemDetail)
        }, 2000)
    })
}

export default function ItemDetailContainer(){

    const [product, setProduct] = useState([])
    const id = 1

    useEffect(() => {
        findItem(id)
        .then((resp) => {setProduct(resp)})
        .catch((error) => {console.log(error)})
    })
    
    return(
        <>
            <ItemDetail item={product}/>
        </>
    )
}