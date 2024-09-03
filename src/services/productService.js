export const fetchProducts=async()=>{
    const response = await fetch('https://dummyjson.com/products');
    const data=await response.json();
    return data.products;

};

export const fetchProductById=async(id)=>{
    const response=await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data
}

