
export const fetchCartItems = async () => {
    const response = await fetch('http://10.0.2.2:5000/getcart?cart_id=1');
    if (!response.ok) throw new Error('Failed to fetch cart items');
    return response.json();
  };
  
  export const deleteCartItem = async (id: number) => {
    const response = await fetch(`http://10.0.2.2:5000/deletecartitem?id=${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete item from cart');
  };

  // export const additemstocart= async(id:number , quantity:number)=>{
  //   const response = await fetch('http://10.0.2.2:5000/add-to-cart', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       cart_id: 1,
  //       product_specification_id: id,
  //       quantity: quantity,
  //     }),
  //   });
  //   if (!response.ok) throw new Error('Failed to update item quantity in cart ');
  // }
  