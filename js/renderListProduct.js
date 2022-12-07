import { API_URL, PREFIX_PRODUCT } from "./const.js";
import { createCardProduct } from "./createCardProduct.js";
import { catalogList } from "./elements.js";
import { getData } from "./getData.js";

export const renderListProduct = async (category = "Burger") => {
  const listProduct = await getData(
    `${API_URL}${PREFIX_PRODUCT}?category=${category}`
  );
  const listCard = listProduct.map(createCardProduct);

  catalogList.textContent = "";
  catalogList.append(...listCard);
};
