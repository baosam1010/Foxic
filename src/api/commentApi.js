import axiosClient from "./axiosClient";

const CommentApi = {

    getAll:(params)=>{
        const url = "https://jsonplaceholder.typicode.com/posts"
        return axiosClient.get(url,{params})
    },

    get: (id)=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        return axiosClient.get(url)
    }


}


export  default CommentApi;