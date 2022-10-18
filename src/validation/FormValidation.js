import * as yup from 'yup'
export const SchemaForm = yup.object({
    petName: yup.string().required(),
    owner: yup.string().required(),
    email: yup.string().email().required(),
    discharge: yup.string().required(),
    symptom: yup.string().required(),
})