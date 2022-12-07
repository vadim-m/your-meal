import { catalogList, countAmount, modalProduct } from "./elements.js";
import { openModal } from "./modal.js";
import { renderListProduct } from "./renderListProduct.js";
import { navigationListController } from "./navigationListController.js";
import { cartInit } from "./cart.js";

catalogList.addEventListener("click", (e) => {
  const target = e.target;

  if (target.closest(".product__detail") || target.closest(".product__image")) {
    const id = target.closest(".product").dataset.idProduct;
    countAmount.textContent = 1;
    openModal(id);
  }
});

modalProduct.addEventListener("click", (e) => {
  const target = e.target;

  if (target.closest(".modal__close") || target === modalProduct) {
    modalProduct.classList.remove("modal_open");
  }

  if (target.closest(".count__minus")) {
    let count = countAmount.textContent;
    countAmount.textContent = count < 2 ? 1 : --count;
  }

  if (target.closest(".count__plus")) {
    let count = countAmount.textContent;
    countAmount.textContent = ++count;
  }
});

const init = () => {
  renderListProduct();
  navigationListController(renderListProduct);
  cartInit();
};

init();
