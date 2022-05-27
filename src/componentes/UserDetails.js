

const UserDetails = ({ nome, idade, profissao }) => {

    const maiorIdade = (idade >= 18);

    return (
        <div>
            <h1>DESAFIO SECAO 3</h1>
            <p>Qual é o nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>

            {
                maiorIdade ? (
                    <p>Você pode tirar carteira de motorista!</p>
                ) : (<p>Que pena</p>)
            }
        </div>
    )
};

export default UserDetails