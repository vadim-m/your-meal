import { clearCart } from "./cart.js";
import {
  modalDelivery,
  modalDeliveryForm,
  modalDeliveryFormMsg,
} from "./elements.js";

export const orderController = (getCart) => {
  const checkDelivery = () => {
    if (modalDeliveryForm.format.value === "pickup") {
      modalDeliveryForm["address-info"].classList.add(
        "modal-delivery__fieldset-input_hide"
      );
    }

    if (modalDeliveryForm.format.value === "delivery") {
      modalDeliveryForm["address-info"].classList.remove(
        "modal-delivery__fieldset-input_hide"
      );
    }
  };
  modalDeliveryForm.addEventListener("change", checkDelivery);

  modalDeliveryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(modalDeliveryForm);
    const data = Object.fromEntries(formData);
    data.order = getCart();

    fetch("https://reqres.in/api/users", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        clearCart();
        modalDeliveryForm.reset();
        checkDelivery();
        modalDeliveryFormMsg.textContent = `
          Спасибо за Ваш заказ - ${data.id}! Ожидайте звонка нашего оператора в ближайшее время.
        `;
      });
  });

  modalDelivery.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".modal__close") || target === modalDelivery) {
      modalDelivery.classList.remove("modal_open");
      modalDeliveryFormMsg.textContent = "";
    }
  });
};
