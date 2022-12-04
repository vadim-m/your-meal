const modalProduct = document.querySelector(".modal_product");
const catalogList = document.querySelector(".catalog__list");

const product = {
  title: "Super Burger",
  price: "999",
  weight: "722",
  calories: "650",
  description: "Very very very big big burger! Make you happy again!",
  image: "./img/megaburger.jpg",
  ingredients: ["bread", "meat", "onion", "cheese", "ketchup", "tomato"],
};

const ingredientsList = document.querySelector(".ingredients__list");
const ingredientsCalories = document.querySelector(".ingredients__calories");
const moduleProductTitle = document.querySelector(".modal-product__title");
const moduleProductImage = document.querySelector(".modal-product__image");
const moduleProductDesc = document.querySelector(".modal-product__description");
const moduleProductPrice = document.querySelector(
  ".modal-product__price-count"
);

moduleProductTitle.textContent = product.title;
moduleProductImage.src = product.image;

const ingredientsListItems = product.ingredients.map((item) => {
  const li = document.createElement("li");
  li.classList.add("ingredient__item");
  li.textContent = item;

  return li;
});

ingredientsList.textContent = "";
ingredientsList.append(...ingredientsListItems);

catalogList.addEventListener("click", (e) => {
  const target = e.target;

  if (target.closest(".product__detail") || target.closest(".product__image")) {
    modalProduct.classList.add("modal_open");
  }
});

modalProduct.addEventListener("click", (e) => {
  const target = e.target;

  if (target.closest(".modal__close") || target === modalProduct) {
    modalProduct.classList.remove("modal_open");
  }
});
