import { useState } from "react";

const Lista = () => {
    const [lista] = useState(["Gabriele", "Josuel"])

    const [number, setNumber] = useState(25);

    const [users, setUsers] = useState([
        { id: 1, nome: "Gabriele", age: 30 },
        { id: 2, nome: "Josuel", age: 35 },
        { id: 3, nome: "Robson", age: 30 }
    ])

    const deleteRandom = () => {
        const ramdomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => ramdomNumber !== user.id)
        });
    };

    return (
        <div>
            <ul>
                {lista.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <button onClick={() => setNumber(50)}>OK</button>
            <div>{number}</div>
            <div>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.nome}</li>
                    ))}
                </ul>
            </div>
            <div>
                <button onClick={deleteRandom}>Delete Lista</button>
            </div>
        </div>
    )
}

export default Lista;