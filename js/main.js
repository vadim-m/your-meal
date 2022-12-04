import { catalogList, modalProduct } from "./elements.js";
import { createCardProduct } from "./createCardProduct.js";
import { openModal } from "./openModal.js";
import { renderListProduct } from "./renderListProduct.js";
import { navigationListController } from "./navigationListController.js";

const maxBurger = {
  title: "Super Burger",
  price: "999",
  weight: "722",
  calories: "650",
  description: "Very very very big big burger! Make you happy again!",
  image: "./img/megaburger.jpg",
  ingredients: ["bread", "meat", "onion", "cheese", "ketchup", "tomato"],
};

catalogList.addEventListener("click", (e) => {
  const target = e.target;

  if (target.closest(".product__detail") || target.closest(".product__image")) {
    openModal(maxBurger);
  }
});

modalProduct.addEventListener("click", (e) => {
  const target = e.target;

  if (target.closest(".modal__close") || target === modalProduct) {
    modalProduct.classList.remove("modal_open");
  }
});

const init = () => {
  renderListProduct();
  navigationListController();
};

init();
