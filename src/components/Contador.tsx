import { useState } from "react"

export const Contador = () => {

    const [counter, setCounter] = useState(0);

    const acumular = (numero: number) => {
        setCounter(counter+numero);
    }

    return (
        <>
            <h3> Contador: <small> { counter } </small> </h3>
            <button
                className='btn btn-primary'
                onClick = { () => acumular(1) }
            >
                +1
            </button>
            &nbsp;
            <button
                className='btn btn-secondary'
                onClick = { () => acumular(-1) }
            >
                -1
            </button>
        </>
    )
}
