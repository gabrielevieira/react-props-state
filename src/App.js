import { useState } from 'react';
import './App.css';
import Challenge from './componentes/Challenge';
import Lista from './componentes/Lista';
import ShowDetailsCar from './componentes/ShowDetailsCar';
import ShowInformacao from './componentes/ShowInformacao';
import ShowMessage from './componentes/ShowMessage';
import ShowUserName from './componentes/ShowUserName';
import UserDetails from './componentes/UserDetails';

function App() {

  // const nome = "Maria"

  const [name] = useState("Fernanda")

  const carros = [
    { id: 1, marca: "BMW", km: 0, cor: "branco", newCar: true },
    { id: 2, marca: "Ferrari", km: 0, cor: "branco", newCar: true },
    { id: 3, marca: "Kombi", km: 0, cor: "branco", newCar: true }
  ]

  const pessoa = [{ id: 1, nome: "João", idade: 18, profissao: "Açogueiro" },
  { id: 2, nome: "Roberto", idade: 35, profissao: "Vendedor", },
  { id: 3, nome: "Douglas", idade: 17, profissao: "Professor", }
  ]


  const carrosNovos = [{ id: 1, marca: "Hunday", completo: true, KM: 1000, modelo: "HB20" },
  { id: 2, marca: "Chevrolet", completo: true, KM: 2000, modelo: "Celta" },
  { id: 3, marca: "Renout", completo: true, KM: 0, modelo: "Clio" }]


  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }



  return (
    <div className="App">
      <Lista />
      {/*porps*/}
      <ShowUserName name={name} />
      {/*destructuring props */}
      <ShowDetailsCar marca="Chevrolet" km={1000} cor="branco" newCar={false} />
      {/*reaproveiatamento props */}
      <ShowDetailsCar marca="Renault" km={0} cor="branco" newCar={true} />
      <ShowDetailsCar marca="Hunday" km={1000} cor="branco" newCar={false} />
      <ShowDetailsCar marca="Fiat" km={0} cor="branco" newCar={true} />
      {/*loop array props */}
      {carros.map((car) => (
        <ShowDetailsCar
          key={car.id}
          marca={car.marca}
          cor={car.cor}
          newCar={car.newCar}
        />
      ))}
      {/*State Lift */}
      <ShowMessage msg={message} />
      <ShowInformacao handleMessage={handleMessage} />
      {pessoa.map((p) => (
        <UserDetails
          key={p.id}
          nome={p.nome}
          idade={p.idade}
          profissao={p.profissao}
        />
      ))}
      {carrosNovos.map((car) => (
        <Challenge
          key={car.id}
          marca={car.marca}
          completo={car.completo}
          KM={car.KM}
          modelo={car.modelo}
        />
      ))}


    </div>
  );
}

export default App;
