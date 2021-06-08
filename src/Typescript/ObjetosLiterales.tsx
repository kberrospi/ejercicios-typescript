

interface Persona {
    nombre: string,
    edad: number,
    direccion: Direccion
}

interface Direccion {
    pais: string,
    casaNo: number
}

export const ObjetosLiterales = () => {

    const persona: Persona  ={
        nombre: 'Keivin',
        edad: 27,
        direccion: {
            pais: 'Colombia',
            casaNo: 345
        }
    }

    return (
        <>
            <h3> Objetos Literales</h3>   
        </>
    )
}
