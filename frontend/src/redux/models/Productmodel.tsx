

export interface Product {
    id: string;
    product_name: string;
    price: number;
    discount: number;
    sale:boolean;
    category_id:number;
    image_url:string;
   
  }
  
 export interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
  }