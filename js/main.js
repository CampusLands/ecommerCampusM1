import { menuListCategoryIndex } from "./components/menu.js";
import { galleryIndex } from "./components/gallery.js";
import { getAllProductName, getAllCategory } from "./module/app.js";




let input__search = document.querySelector("#input__search");
let main__article = document.querySelector(".main__article");
let nav__ul = document.querySelector(".nav__ul");

addEventListener("DOMContentLoaded", async e=>{
    let data = await getAllCategory();
    nav__ul.innerHTML = await menuListCategoryIndex(data);  
})

input__search.addEventListener("change", async e => {
    let data = { search : e.target.value}
    input__search.value = null;

    let res = await getAllProductName(data)
    main__article.innerHTML = galleryIndex(res);
    
    
});