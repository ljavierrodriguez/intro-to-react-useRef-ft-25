import React, { useEffect } from 'react'

const UsingEffect = () => {

    const saludar = () => {
        console.log("Hola, como estan?")
    }

    const despedida = () => {
        console.log("Chao, hasta mañana!")
    }

    useEffect(() => {

        saludar()

        return () => {
            
            despedida()
        }

    }, [])

    return (
        <div>UsingEffect</div>
    )
}

export default UsingEffect