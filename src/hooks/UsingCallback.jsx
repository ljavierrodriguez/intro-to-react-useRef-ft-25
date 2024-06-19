import React, { useCallback, useState } from 'react'


const ChildComponent = ({ increment }) => {
    return (
        <button className='btn btn-primary' onClick={increment}>Incrementar</button>
    )
}

const UsingCallback = () => {

    const [count, setCount] = useState(0)

    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    return (
        <div>
            <p>Count: {count}</p>
            <ChildComponent increment={increment} />
        </div>
    )
}

export default UsingCallback