import axiosClient from "./axiosClient";

const productApi = {
  getAll: (params) => {
    const url = 'https://60f7820c9cdca00017454e83.mockapi.io/manga/v1/products' ;
    return axiosClient.get(url, {params } );
  },

  get: (id) => {
    const url = `https://60f7820c9cdca00017454e83.mockapi.io/manga/v1/products/${id}`;
    return axiosClient.get(url);
  },
  //....
}

export default productApi;







