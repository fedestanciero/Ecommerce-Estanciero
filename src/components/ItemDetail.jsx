import ItemCount from "./ItemCount";

export default function ItemDetail({item}){

    return(
        <div className="container item-detail">
            <div className="row">
                <div className="item-detail-imagen col-6">
                    <img src={item.imagen} alt="" />
                </div>
                <div className="item-detail-informacion col-6">
                    <h2 className="item-detail-titulo">{item.nombre}</h2>
                    <div className="item-detail-precio">{item.precio}</div>
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    )
}