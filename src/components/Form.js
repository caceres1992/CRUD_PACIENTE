import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaForm } from '../validation/FormValidation';
import { v4 as uuidv4 } from 'uuid';
const Form = ({ setData, dataPaciente, updatePaciente, setUpdatePaciente }) => {

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(SchemaForm)
    });
    const handleData = (data) => {

        if (updatePaciente) {
            data.id = updatePaciente.id
            const updatedPacientes = dataPaciente.map(paciente => {
                return paciente.id === updatePaciente.id ? data : paciente
            })
            setData(updatedPacientes)
            alert(" Appointment updated successfull")
            setUpdatePaciente(null)
            reset()
            return
        }

        console.log(dataPaciente.length)
        if (dataPaciente.length == 3) {
            alert("Solo se puede registrar con un maximo de 3")
            return
        }

        data.id = uuidv4();
        alert("Add new Appointment successfull")
        setData([...dataPaciente, data])
        reset()
    }



    useEffect(() => {

        if (updatePaciente) {
            console.log(updatePaciente)
            setValue("petName", updatePaciente.petName, { shouldValidate: true })
            setValue("owner", updatePaciente.owner, { shouldValidate: true })
            setValue("email", updatePaciente.email, { shouldValidate: true })
            setValue("discharge", updatePaciente.discharge, { shouldValidate: true })
            setValue("symptom", updatePaciente.symptom, { shouldValidate: true })
            // setValue(updatePaciente.owner)
        }

    }, [updatePaciente])

    return (
        <form className='bg-white space-y-4' onSubmit={handleSubmit(handleData)}>
            <div>
                <label className='font-bold text-gray-600'>Pet Name</label>
                <div>
                    <input placeholder='Bobby'
                        {...register('petName')}
                        className='border w-full outline-none placeholder:font-light py-2 px-3 text-sm rounded-md capitalize' />
                    {errors.petName && <p className='error_message'>{errors.petName.message}</p>}
                </div>
            </div>

            <div>
                <label className='font-bold text-gray-600'>Owner</label>
                <div>
                    <input placeholder='John Doe'    {...register('owner')}
                    className='border w-full outline-none placeholder:font-light py-2 px-3 text-sm rounded-md capitalize' />
                    {errors.owner && <p className='error_message'>{errors.owner.message}</p>}
                </div>
            </div>

            <div>
                <label className='font-bold text-gray-600 capitalize'>Email</label>
                <div>
                    <div>
                        <input placeholder='Johndoe@example.com' type={'email'}   {...register('email')}
                        className='border w-full outline-none placeholder:font-light py-2 px-3 text-sm rounded-md capitalize' />
                        {errors.email && <p className='error_message'>{errors.email.message}</p>}
                    </div>
                </div>
            </div>

            <div>
                <label className='font-bold text-gray-600'>Discharge</label>
                <div>
                    <input type={'date'}     {...register('discharge')}
                        className='border w-full outline-none placeholder:font-light py-2 px-3 text-sm rounded-md capitalize' />
                    {errors.discharge && <p className='error_message'>{errors.discharge.message}</p>}
                </div>
            </div>

            <div>
                <label className='font-bold text-gray-600' >Symptom</label>
                <div>
                    <textarea className='border px-3 py-2 w-full ' rows={3} {...register('symptom')} />
                    {errors.symptom && <p className='error_message'>{errors.symptom.message}</p>}
                </div>
            </div>
            <input type='submit' className="w-full cursor-pointer bg-purple-600 text-white py-3 " value={updatePaciente ? 'UPDATE' : 'REGISTER'} />
        </form>
    )
}

export default Form