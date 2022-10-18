import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import { GiSniffingDog } from 'react-icons/gi'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css





function App() {

  const [data, setData] = useState([]);
  const [updatePaciente, setUpdatePaciente] = useState(null)



  const handleDeleteItem = (pacienteId) => {

    const options = {
      title: 'Are you sure?',
      message: 'Do you want to delete this appointment?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            const newData = data.filter(item => item.id != pacienteId)
            setData(newData)
          }
        },
        {
          label: 'No',
          onClick: () => ("no se elimino nada")
        }
      ],
    };

    confirmAlert(options);


  }

  const getPacienteById = (pacienteId) => {


    console.log(pacienteId)
    const pacienteFound = data.filter(item => item.id === pacienteId)[0]
    setUpdatePaciente(pacienteFound)
  }

  useEffect(() => {
    const getPacientesBylocalStorage = () => {
      const dataLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setData(dataLS)
      console.log(dataLS)
    }
    getPacientesBylocalStorage()
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(data))
  }, [data])



  return (
    <div className="bg-gradient-to-t to-purple-500 from-purple-600 min-h-screen h-full">
      <h1 className='text-3xl text-center  font-bold p-10 flex justify-center items-center gap-2'>Patient follow-up <span className='text-purple-100 flex items-center gap-2'>Vet <GiSniffingDog size={40} /></span></h1>

      <section className='flex flex-col lg:flex-row justify-between  container mx-auto gap-10 bg-white  p-5 lg:p-20 rounded-lg'>


        <div className='flex-1'>
          <p className='text-base text-gray-900 font-bold'>Patient follow-up</p>
          <p className='text-xs text-gray-500  pt-3 pb-10'>Add Patient and <strong className='text-purple-600'>manage them</strong> </p>
          <Form setData={setData} dataPaciente={data} updatePaciente={updatePaciente} setUpdatePaciente={setUpdatePaciente} />
        </div>

        <div className='flex-1'>
          <p className='text-base text-gray-900 font-bold'>Patient follow-up</p>
          <p className='text-xs text-gray-500  pt-3 pb-10'>Add Patient and <strong className='text-purple-600'>manage them</strong> </p>
          <div className='flex flex-wrap justify-center gap-2' >


            {data.length > 0 ? data.map(item =>
              <Card key={item.id} item={item} handleDeleteItem={handleDeleteItem} getPacienteById={getPacienteById} />
            ) :
              <p className='text-gray-700 font-medium'>No hay paciente registrado</p>
            }
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
