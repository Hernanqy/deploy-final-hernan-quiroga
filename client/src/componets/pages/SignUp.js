
import axios from "axios";
import * as React from "react";
export default function Form() {

    const getPostsRequest = async () => {
        try {
          const res = await axios.get("/posts");
          return res.data;
        } catch (error) {
          console.log(error);
        }
      };
    
    return (
        <div className="m-10 flex items-center justify-center ">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100"> 
            <h1 className="text-5xl font-semibold">BUSCAR POR TITULO</h1>
            <p className="font-medium text-lg text-gray-500 mt-4"> Por favor ingrese el titulo de la pelicula</p>
            <div>
                <div className="mt-8">
                    <label className="text-lg font-medium">TITULO</label>
                    <input  
                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                    placeholder=""/>
                </div>
                
               
              
                
            </div>
        </div>
        </div>
    )
}

