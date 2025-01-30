import React, { useEffect, useState } from 'react'



//Necesito si la cantidad de letras ingesadas es menor que 10, el texto se va mostrar en color amarill0
// es mayor que 10 y menor que 50 el texto se va mostrar en color verde
// mayor que 50 el texto se va mostrar en color rojo

//Un contador de letras

export default function Formulario() {
    //compuesta  nombreApellido, nombrePersona

  const [texto,setTexto]= useState("")
  const [contadorLetras, setContadorLetras] = useState(0);
  const [color, setColor] = useState("yellow") ;
  const [tamano, setTamano] = useState('25px')

  useEffect(()=>{
    const contarPalabras = texto.length
    setContadorLetras(contarPalabras)
    if (contadorLetras <10 ) {
      setColor("yellow")
      setTamano('25px')
    }
    if (contadorLetras >10 && contadorLetras < 50) {
      setColor('green')
      setTamano('40px')
    }
    if (contadorLetras >=50 ) {
      setColor('red')
      setTamano('60px')
    }

  },[texto]);


  const manejarTexto=(e:any)=>{
    setTexto(e.target.value)
  }
  
  return (
    <div>

        <h1>Contador de letras</h1>

        <textarea name="letras" id="letras" rows={10} cols={50}        
        placeholder='Ingresar una palabra'
        value={texto}
        onChange={manejarTexto} 
        style={{
          width: '100%',
          height: '150px',
          padding: '10px',
          fontSize: tamano,
          borderRadius: '8px',
          border: '1px solid #ccc',
          color: color
        }}    
    
        
        >

        </textarea>

        <h2>Cantidad de palabras {contadorLetras}</h2>
    </div>
  )
}
