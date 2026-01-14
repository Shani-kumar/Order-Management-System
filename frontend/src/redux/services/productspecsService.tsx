import axios from "axios";


export const fetchProductSpecs = async (productId: string) => {
    
      const response = await axios(`http://10.0.2.2:5000/productspecs?product_id=${productId}`);
            return response.data
    
  };
  