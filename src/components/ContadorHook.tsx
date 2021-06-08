import { useState } from "react"
import { useCounter } from './useCounter';

export const ContadorHook = () => {

    const { counter, acumular } = useCounter(40);

    return (
        <>
            <h3> Contador con Hook: <small> { counter } </small> </h3>
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
