import Item from "./Item"
import ItemListContainer from "./ItemListContainer"

export default function ItemList({product}){
    console.log(product)
    return(
        <div className="itemList">
            <div className="row d-flex justify-content-center">
                {product.map(data => <Item key={data.id} nombre={data.nombre} precio={data.precio} categoria={data.categoria} licencia={data.licencia} destacado={data.destacado} imagen={data.imagen} />)}
            </div>
        </div>
    )
}
