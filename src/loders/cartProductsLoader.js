import { getShoppingCart } from "../fakedb";

const cartProductsLoader = async() =>{
    const loaderProducts = await fetch('products.json');
    const products = await loaderProducts.json();
    
    const storedCart = getShoppingCart();
    const savedCart = [];
    
    for (const id in storedCart){
        const addedProducts = products.find( product => product.id === id);
        if (addedProducts){
            const quantity = storedCart[id];
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts)
        }
    }


    return savedCart;
}

export default cartProductsLoader;