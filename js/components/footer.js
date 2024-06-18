export const buttonCartDetails = async(res)=>{
    let {data} = res;
    let {
        category_path,
        about_product,
        product_details,
        product_information,
        product_photos,
        product_variations,
        rating_distribution,
        review_aspects,
        ...dataUpdate
    } = data;
    console.log(dataUpdate);
    let product_original_price = dataUpdate.product_original_price;
    let product_price = dataUpdate.product_price;
    if(product_original_price != null && product_original_price.indexOf("$")) product_original_price = `$${product_original_price}` 
    if(product_price.indexOf("$")) product_price = `$${product_price}` 
    
    return /*html*/`
    <li>
        <a href="checkout.html">
            <img src="../storage/img/shopping-cart.svg">
            <span>Add to Cart | ${(product_original_price) ? product_price+" <del><sub>"+product_original_price+"</sub></del>" : product_price} </span>
        </a>
    </li>`;
}