export interface ProductSpecs {
    id: number;
    product_id: number;
    sku_id: string;
    grade: string;
    net_weight: number;
    stocks: number;
    discount: number;  
    min_order_quantitiy: number;
    max_order_quantitiy: number;
    dimensions: string;
    price: number;
    product_name: string;
    country_of_origin: string;
    sale: boolean;
    brand: string;
    description: string;
    image_url:string;
  }
  