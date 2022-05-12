export default function Item ({nombre, precio, categoria, imagen}){

 return (
    <div className="container item-card col-2">
        <a href="#">
            <div className="row">
                <div className="div-imagen">
                    <img src={imagen} alt="" />
                </div>
                <div className="product-title text-center">
                    <span>{nombre}</span>
                </div>
                <div className="product-price text-center">
                    <span>{precio}</span>
                </div>
            </div>
        </a>
    </div>
)}