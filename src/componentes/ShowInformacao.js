
const ShowInformacao = ({ handleMessage }) => {

    const messages = ["Olá", "Olá tudo bem", "Olá bom dia"]
    return (
        <div>
            <button onClick={() => handleMessage(messages[0])}>1</button>
            <button onClick={() => handleMessage(messages[1])}>2</button>
            <button onClick={() => handleMessage(messages[2])}>3</button>
        </div>
    )
}

export default ShowInformacao