import './App.css'
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';

export default function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer productos={"Aquí van los productos"} />
    </>
  )
}

