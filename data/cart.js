export let cart = [];


export function addToCart(productId){
    let matchingItem;
  
    cart.forEach((cartItem)=>{
        if (productId === cartItem.productId)
        {
            matchingItem = cartItem;
        }
    });
  
    if(matchingItem)
    {
        matchingItem.quantity +=1;
    }
    else
    {
        cart.push({
            productId: productId,
            quantity: 1
        });
        // push object into cart which has product name and quantity
    }
  }
  
  export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem)=>{
        if (cartItem.productId !== productId)
        {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

  } 
  