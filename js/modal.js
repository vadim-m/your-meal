import { API_URL, PREFIX_PRODUCT } from "./const.js";
import {
  modalProduct,
  modalProductTitle,
  modalProductImage,
  modalProductDesc,
  modalProductPrice,
  ingredientsList,
  ingredientsCalories,
  modalProductBtn,
} from "./elements.js";
import { getData } from "./getData.js";

export const openModal = async (id) => {
  const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`);
  modalProductTitle.textContent = product.title;
  modalProductDesc.textContent = product.description;
  modalProductPrice.textContent = product.price;
  modalProductImage.src = `${API_URL}/${product.image}`;
  modalProductBtn.dataset.idProduct = product.id;

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
  document.addEventListener("keydown", closeModal);
};

export const closeModal = (e) => {
  if (e.key === "Escape") {
    modalProduct.classList.remove("modal_open");
    document.removeEventListener("keydown", closeModal);
  }
};
