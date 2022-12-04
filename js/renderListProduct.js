import { API_URL, PREFIX_PRODUCT } from "./const.js";
import { createCardProduct } from "./createCardProduct.js";
import { catalogList } from "./elements.js";
import { getData } from "./getData.js";

export const renderListProduct = async () => {
  const listProduct = await getData(`${API_URL}${PREFIX_PRODUCT}`);
  const listCard = listProduct.map(createCardProduct);

  catalogList.textContent = "";
  catalogList.append(...listCard);
};
