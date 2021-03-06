import axiosClient from "./axiosClient";

const userApi = {
    getAll: (params) => {
        return axiosClient.get('https://jsonplaceholder.typicode.com/users');
    },
    getA: (params) => {
        return axiosClient.get('https://jsonplaceholder.typicode.com/users',{params});
    },
    get:(id)=>{
        return axiosClient.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    },
    put:(params)=>{
        return axiosClient.put(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    }
};


export default userApi;