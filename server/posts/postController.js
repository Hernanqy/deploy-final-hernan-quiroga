
const { listOnePost,addNewPost, getAllPosts, getPostsWith, deleteOnePost,editOnePost } = require("./postModel")
const  {matchedData} = require("express-validator")
const notNumber = require("../utils/notNumber")
const public_url = process.env.public_url



const listAll = async( req,res, next) =>{
    let dbResponse = null;
    if(req.query.title) {
        dbResponse = await getPostsWith(req.query.title)
    } else {
        dbResponse = await getAllPosts();
    };
if(dbResponse instanceof Error) return next(dbResponse);
dbResponse.length ? res.status(200).json(dbResponse) : next();

}

const deletePost = async(req,res, next) =>{
    if(notNumber(req.params.id, next)) return
    
    const dbResponse = await deleteOnePost(+req.params.id)
    
    if (dbResponse instanceof Error) return next(dbResponse)
   !dbResponse.affectedRows ? next(): res.status(204).json({message : `Post eliminado`});
}

const onePost = async(req, res, next) => {
    if(notNumber(req.params.id, next)) return
       const dbResponse = await listOnePost(+req.params.id);
       if (dbResponse instanceof Error) return next(dbResponse)
       if (!dbResponse.length)  return next()
       
       const { id, title, body } = dbResponse[0]
 const responseUser = {
     id,title,body
 }
   res.status(200).json(responseUser)
   
}

const addOne =async (req,res,next) =>{
     /* const cleanBody = matchedData(req)/*/
     
        const image= `${public_url}/${req.file.filename}`
   const dbResponse= await addNewPost({userid:1,...req.body,image })
   
   
dbResponse instanceof Error ? next(dbResponse)
: res.status(201).json({message : `Post created by`})


}

const editOne = async (req, res, next) => {
   
    
    if(notNumber(req.params.id, next)) return;
    const image= `${public_url}/${req.file.filename}`
    const dbResponse = await editOnePost(+req.params.id, {...req.body, image})

    if(dbResponse instanceof Error) return next (dbResponse);

    dbResponse.affectedRows ? res.status(200).json({message: "Post modified"}) :  next() 
};



module.exports = {onePost,  addOne, listAll, deletePost,editOne}