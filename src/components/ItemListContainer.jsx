import ItemCount from "./ItemCount"


export default function ListadoProductos ({productos="productos"}){
    return(
        <>
        <h1>{productos}</h1>
        <ItemCount stock={5} initial={1} onAdd={(count)=>console.log(`${count} unidad/es agregada/s al pedido`)} /> 
        </>
    )
}