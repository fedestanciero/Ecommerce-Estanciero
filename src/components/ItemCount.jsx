import { VscAdd } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";
import { useState } from "react";

export default function ItemCount({stock, initial, onAdd}){
    
    const [count, setCount] = useState(initial);

    const agregarCantidad = () => {
        if(count<stock){
            setCount(count+1)
        }
    }

    const restarCantidad = () => {
        if(count>1){
            setCount(count-1)
        }
    }

    function addToCart() {
        onAdd(count);
    }

    return(
        <div className="container itemCount">
            <div className="row itemTitle text-center">
                <span>Nombre del producto</span>
            </div>
            <div className="row itemQuantity">
                <div onClick={restarCantidad} className='col-2 d-flex justify-content-center align-items-center cursor-pointer'>
                    <VscChromeMinimize/>
                </div>
                <div className='col-8 d-flex justify-content-center align-items-center'>
                    <span>{count}</span>
                </div>
                <div onClick={agregarCantidad} className='col-2 d-flex justify-content-center align-items-center cursor-pointer'>
                    <VscAdd/>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <button onClick={addToCart} className="button-add-to-cart">Agregar al carrito</button>
            </div>
        </div>
    )
}


