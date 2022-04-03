const Products =() => {
    return fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        return data;
    })
}
export default Products;