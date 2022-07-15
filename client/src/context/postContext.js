import { createContext, useContext, useEffect, useState } from "react";
import {
  getPostsRequest,
  deletePostRequest,
  createPostRequest,
  getPostRequest,
  updatePostRequest,
} from "../api/posts";

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  if (!context) throw new Error("Post Provider is missing");
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      await newState();
    })();
  }, []);
  const newState = async () => {
    const otraRes = await getPostsRequest();
    setPosts(otraRes);
  };
  
  const deletePost = async (id) => {
    const res = await deletePostRequest(id);
     if(res === 204){
      await newState()
     }
      
  }
  
  const createPost = async (post) => {
  
    try {
      const res = await createPostRequest(post);
       
      if(res === 201){
        
        await newState()
       }  
       } catch (error) {
      console.error(error);
    }
  };



  const getPost = async (id) => {
    try {
      const res = await getPostRequest(id);
            
      if(res.status === 200){
        
        return res.data
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = async (id, post) => {
    console.log("estos es el context", id, post)
    try {
      const res = await updatePostRequest(id, post);
      
      if(res === 200){
        await newState()
       }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <postContext.Provider
      value={{ posts,
          deletePost,
          createPost, 
          getPost,
           updatePost 
          }}
    >
      {children}
    </postContext.Provider>
  );
};