const categories = document.querySelectorAll(".categoriesContainer>p");
// const menuCategory = document.querySelectorAll("#subMenu>.firstUl>.showOnly");
const products = document.querySelectorAll(".products>.indProduct");
const menuProducts = document.querySelectorAll("ul.secondUl > li");
const categorieContainer = document.querySelector("#main .categoriesContainer");
const welcome = document.querySelector("#main .welcomeToMenu");

hideAll(categories);
hideAll(products);

function hideAll(categories){
    for (let i = 0; i < categories.length; i++) {
        categories[i].style.display = "none";
    }
}

function showProduct(index){
    return function(){
        hideAll(products);
        products[index].style.display="block";
        welcome.style.display = "none";
        categorieContainer.style.display = "none";
    }
}

for (let i = 0; i < menuProducts.length; i++) {
    const item = menuProducts[i];
    item.addEventListener("click", showProduct(i));
}
  