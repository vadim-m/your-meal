import {
  modalProduct,
  modalProductTitle,
  modalProductImage,
  modalProductDesc,
  modalProductPrice,
  ingredientsList,
  ingredientsCalories,
} from "./elements.js";

export const openModal = (product) => {
  modalProductTitle.textContent = product.title;
  modalProductDesc.textContent = product.description;
  modalProductPrice.textContent = product.price;
  modalProductImage.src = product.image;

  const ingredientsListItems = product.ingredients.map((item) => {
    const li = document.createElement("li");
    li.classList.add("ingredient__item");
    li.textContent = item;

    return li;
  });

  ingredientsCalories.textContent = `${product.weight}г, ${product.calories}ккал`;
  ingredientsList.textContent = "";
  ingredientsList.append(...ingredientsListItems);

  modalProduct.classList.add("modal_open");
};
