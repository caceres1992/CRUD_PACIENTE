import React from 'react'

const Card = ({ item, handleDeleteItem, getPacienteById }) => {
    return (
        <div className='shadow-lg hover:border transition-all ease-in-out py-2 px-3 md:p-4 my-3 :min-w-[350px] w-full md:max-w-xs lg:max-w-none'>
            <div className='flex flex-col lg:flex-row gap-x-2 lg:items-center'>
                <p className='text-gray-700 font-bold uppercase'>Mascota : </p>
                <p >{item.petName}</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-x-2 lg:items-center'>
                <p className='text-gray-700 font-bold uppercase'>Propietario : </p>
                <p >{item.owner}</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-x-2 lg:items-center'>
                <p className='text-gray-700 font-bold uppercase'>Email : </p>
                <p >{item.email}</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-x-2 lg:items-center'>
                <p className='text-gray-700 font-bold uppercase'>Fecha Alta : </p>
                <p >{item.discharge}</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-x-2 lg:items-center'>
                <p className='text-gray-700 font-bold uppercase'>Sintomas : </p>
                <p >{item.symptom}</p>
            </div>

            <div className='flex items-center justify-between py-6 flex-col lg:flex-row gap-y-3'>
                <button className='bg-purple-600 text-white py-2 text-sm  w-full lg:w-fit rounded-md px-6' onClick={() => getPacienteById(item.id)}>EDITAR</button>
                <button className='bg-red-600 text-white py-2 text-sm  w-full lg:w-fit  rounded-md px-6'
                    onClick={() => handleDeleteItem(item.id)}
                >ELIMINAR</button>
            </div>
        </div>
    )
}

export default Card