import { useState } from "react"

function HookUseState() {
    // name é o valor inicial do dado e setName nome dado por convenção, é o valor que ira substituir o primeiro. Em resumo o primeiro é uma variavel o segundo uma função.
    const [name, setName] = useState('')
    const [idade, setIdade] = useState(0)
    // essa constante recebe uma função anonima que pega o valor setado por padrao e incrementa + 1 por meio desse arg padrao que o setState tem que pega o valor setado anterior como referencia
    const minhaIdade = () => {
        setIdade((incrementaIdade) => incrementaIdade + 1)
    }
    return (
        <div>
            <h1>Se apresente soldado</h1>
            {/* por padrao estou setando no value do input o valor de name que esta vazio
             dai passei a função onChange que recebe o evento que a cada letra digitada é capturada e com o setName mostra no input em tempo real pro usuário*/}
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Digite seu nome de guerra" />
            <p>Muito bem soldado: <strong>{name}</strong> </p>
            {/* Aqui tambe estou setando o valor padrao idade como vazio na tag p */}
            <p>Agora me diga sua idade soldado: <strong>{idade}</strong></p>
            {/* Aqui estou passando o evento de onclick que ao clicar dispara o setIdade*/}
            <button onClick={minhaIdade}>Clique para alterar a idade</button>

        </div>
    )
}

export default HookUseState