import './App.css'
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import "./components/styles/ItemCount.css"
import "./components/styles/CartWidget.css"
import "./components/styles/NavBar.css"
import "./components/styles/Item.css"
import "./components/styles/ItemList.css"

import "https://code.jquery.com/jquery-3.6.0.min.js"

export default function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer productos={"Aquí van los productos"} />
    </>
  )
}

