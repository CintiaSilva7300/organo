import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9',
    },

    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff',
    },

    {
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2',
    },

    {
      nome: 'Devops',
      corPrimaria: '#e06869',
      corSecundaria: '#f0de7eb',
    },

    {
      nome: 'Ux e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5',
    },

    {
      nome: 'Mobile',
      corPrimaria: '#ffbab5',
      corSecundaria: '#fff509',
    },

    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ffba29',
      corSecundaria: '#ffeedf',
    },
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    // debugger
    // console.log('colaborador', colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  // console.log('times', times);

  return (

    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time =>
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}

    </div>
  );
}

export default App;
