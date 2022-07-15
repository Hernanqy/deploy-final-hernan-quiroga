import * as yup from "yup";

const validationSchema = yup.object({
    title: yup.string().min(3,"minimo 3 caracteres").max(30,"maximo 30 caracteres"),
    body: yup.string().min(3,"minimo 3 caracteres").max(60,"maximo 60 caracteres"),
    file:yup.mixed().required("imagen requeridas"),
})

export default validationSchema