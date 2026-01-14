import axios from "axios";


export const fetchProducts = async () => {
    const response = await axios.get('http://10.0.2.2:5000/products');
    return response.data
  };
  