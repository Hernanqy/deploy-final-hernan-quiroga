const pool = require("../db/config");

const addNewPost = (post) => {
    const query = "INSERT INTO posts SET ?";
    try {
        return pool.query(query, post)
    } catch (error) {
        error.message = error.code
    }
}

const getPostsWith = (string) => {
    const query = `SELECT *FROM posts WHERE title LIKE '%${string}%'`
    try {
        return pool.query(query)

    } catch (error) {
        error.message = error.code
    }
}
const listOnePost = async (id) => {
    const query =`SELECT * FROM posts WHERE id = ${id}`
    try {
        return await pool.query(query)
    } catch (error) {
        error.message = error.code
        return error
       
    }

}
const getAllPosts = () => {
    const query = "SELECT * FROM posts";
    try {
        return pool.query(query)
    } catch (error) {
        error.message = error.code
    }
}

const deleteOnePost = async (id) => {
    const query = `DELETE FROM posts WHERE id = ${id}`;
    try {
        return await pool.query(query)
    } catch (error) {
        error.message = error.code
    }
}

const editOnePost = async  (id, post) => {
    const query = `UPDATE posts SET ? WHERE id = ${id}`
    try {
        return await pool.query(query, post);
    } catch (error) {
        error.message = error.code 
        return 
    }
}
module.exports = {listOnePost,getPostsWith,addNewPost, getAllPosts, deleteOnePost, editOnePost}