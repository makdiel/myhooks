import { useState , useEffect } from 'react'
import './App.css'
import Formulario from './Componentes/Formulario'

function App() {
 //hook usestate [set,get]

 const [contador,setContador] =useState(0)

 //hook estado de la variable useEffect
 //[] vacia, decimos qe se ejecuta al cargar pagina
 //[objeto] escuchando el cambio en un control, el cambio dentro un formulario

 useEffect(()=>{

   console.log("Componente montado");

   const intervalId= setInterval(() => {
       setContador(preveCotandor => preveCotandor+1)
   }, 1000);

   return ()=> clearInterval(intervalId)
 },[])

 return (
   <>
    <h1> Valor del contador {contador}</h1>

    <Formulario></Formulario>
   </>
 )
}

export default App
