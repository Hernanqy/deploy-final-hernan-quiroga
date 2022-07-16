import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePosts  } from "../../context/postContext";
import { useNavigate, useParams,Link } from "react-router-dom";
import { useEffect, useState } from "react";

import * as yup from "yup";


export function Formulario() {
  const { createPost, getPost,updatePost } = usePosts();
  const navigate = useNavigate();
  const params = useParams();
  
  const [post ,setPosts] = useState({
    title: "",
    body: "",
    userid: 24,
    image: ""
  });
  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getPost(params.id);
        console.log("en el useEffect", post);
        setPosts(post);
      }
    })();
  }, [params.id, getPost]);

  return (
    <div className="m-10 flex items-center justify-center ">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black">
     <header className="flex justify-between">
   <h1 className="text-indigo-500"> Publicacion</h1>
   <Link to="/" className="text-gray-400 text-sm hover:text-gray-300">Volver</Link>

     </header>
     
      <Formik
        className=" bg-orange-500"
        initialValues={post}
        validationSchema = {yup.object({
          title: yup.string().min(3,"minimo 3 caracteres").max(30,"maximo 30 caracteres").required("Campo requerido"),
          body: yup.string().min(3,"minimo 3 caracteres").max(200,"maximo 200 caracteres").required("Campo requerido"),
          file:yup.mixed().required("imagen requeridas"),
         })}
        onSubmit={async (values, actions) => {
         
          if(params.id) {
            
          await updatePost(params.id, values)
          navigate("/")
          
         } else {
          
          await createPost(values);
          navigate("/");
        }
        actions.setSubmitting(false)}}
        
        enableReinitialize= {true}
      >
        {({ handleSubmit, setFieldValue}) => (
        
        <Form onSubmit={handleSubmit} className="bg-gray-400 h-30 flex-col justify-center items-center">
            <label
              htmlFor="title"
              className="text-lg bg-indigo-300 box-border rounded-md grow-0 block font-bold text-center text-black-400 m-1 p-10"
            >
              Title
            </label>
             
            <Field className="text-center rounded-lg m-1 " name="title" placeholder="title" />
             <ErrorMessage name="title" className="text-black-400 m-1 p-10"/>
            <label
              htmlFor="body"
              className="text-lg block  bg-indigo-400 rounded-md text-center font-bold text-black-400 m-1 p-10"
            >
              Description
            </label>
            <Field className="text-center rounded-lg m-1 flex " component="textarea" name="body" placeholder="body" />
              <ErrorMessage name="body" className="text-black-400 m-1 p-10"/>
              
              <label
                htmlFor="image"
                className="text-sm block font-bold mb-2 text-gray-400"
              >
                              
              </label>
              <label htmlFor="title" className="text-sm block text-gray-400">
                Image
              </label>
              <input
              onChange={(e)=> setFieldValue('file',e.target.files[0])}
                type="file"
                name="image"
                id=""
                className="rounded-lg  bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none "
              />
            <ErrorMessage name="file" className="text-black-400 m-1 p-10"/>
              
            <button className="bg-indigo-600 hover:bg-indigo-500 w-36 rounded-lg m-5 text-white" type="submit">Enviar</button>

                     
          </Form>
        )}
      </Formik>
      </div>
    </div>
  );
}
export default Formulario;
