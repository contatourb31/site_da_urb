import { useState } from 'react';

function Home() {
    return (
    <div>
        <h2>Quantas vezes o Dudu é bobo:</h2>
        <Contador />
    </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }
    
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Clica aqui pra saber</button>
        </div>
    )
}

export default Home