import React,{ useState} from 'react';
import './Cards.css';
import CardItem from './CardItem.js';
import {usePosts} from "../context/postContext"
import{Link} from "react-router-dom"



function Cards() {
  const {posts} = usePosts();console.log(posts)
const [filtered, setFiltered] = useState("")

  return (
    <div className='cards '>
      <h1 className='animate-pulse text-teal-400 text-6xl'>Peliculas Imperdibles</h1>
      <div className='cards__container '>
        <div className='cards__wrapper'>
         <Link to="/Formulario" className='flex justify-center' ><button className="m-3 p-2 h-9 w-auto rounded-md transition ease-in-out delay-150 bg-sky-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
  Crear nueva publicacion 
</button>
         </Link>
         
         <div className="m-10 flex items-center justify-center ">
      <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
        <h1 className="text-5xl font-semibold">Buscar por titulo</h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          {" "}
          Por favor ingrese el titulo de la pelicula
        </p>
        <div>
          <div className="mt-8">
            <label className="text-lg font-medium " ></label>
           <input type="text" onChange={(e) => setFiltered(String(e.target.value))} className='border-inherit w-full 'placeholder='titulo' ></input>
          </div>
        </div>
      </div>
    </div>








         
         
         {posts.filter(
          ({title}) => title.includes(filtered)

         ).map(post => (
          
          <ul key={post.id} className='cards__items'>
            
            <CardItem 
            post={post}
          
            />
           </ul>
          
         ))
         
          }
          
        </div>
      </div>
    </div>
  );
}

export default Cards;