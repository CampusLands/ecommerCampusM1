import { buttonCartDetails } from "./components/footer.js";
import { galleryCategory } from "./components/gallery.js";
import { productDetail, titleProductDetail } from "./components/section.js";
import { getProductId } from "./module/detail.js";

let main__section_gallery = document.querySelector("#main__section__gallery");
let main__section__title = document.querySelector("#main__section__title");
let product__information = document.querySelector(".product__information");
let footer__ul = document.querySelector(".footer__ul");

addEventListener("DOMContentLoaded", async(e)=>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!localStorage.getItem(id)) localStorage.setItem(id, JSON.stringify(await getProductId({id})));
    
    let info = JSON.parse(localStorage.getItem(id));
    main__section_gallery.innerHTML = await galleryCategory(info);
    main__section__title.innerHTML = await titleProductDetail(info);
    product__information.innerHTML = await productDetail(info);
    footer__ul.innerHTML = await buttonCartDetails(info);
    // let {data} = res;
    // let {
    //     category_path,
    //     about_product,
    //     product_details,
    //     product_information,
    //     product_photos,
    //     product_variations,
    //     rating_distribution,
    //     review_aspects,
    //     ...dataUpdate
    // } = data;
    // console.log(dataUpdate);
})