import {
  SAVE_CATEGORIES,
  SAVE_PRODUCTS,
  ADD_ORDER,
  DELETED_ORDER,
  TOTAL_ORDER
} from "./product.type";

export const saveProducts = (categories, selectSchoolsId) => {
  let products = categories.filter((element) => element.products.length >= 1);
  let productsSchool = [];
  products.forEach((product) => {
    product.products.forEach((p) => {
      if (p.school === selectSchoolsId) {
        productsSchool.push(p);
      }
    });
  });

  return {
    type: SAVE_PRODUCTS,
    payload: productsSchool,
  };
};

export const saveCategories = (categories) => {
  let optionCategories = categories.map((cat) => {
    let newObject = {
      _id: cat._id,
      value: cat.value,
      label: cat.label,
    };
    return newObject;
  });

  return {
    type: SAVE_CATEGORIES,
    payload: optionCategories,
  };
};

export const addProducts = (size, count, products) => {
  let newObject = {};
  products.forEach((item) => {
    if (item._id === size.product) {
      newObject = {
        name: item.name,
        _id: item._id,
        image: item.image,
        category: item.category,
        school: item.school,
        promotions: item.promotions,
      };
    }
  });

  return {
    type: ADD_ORDER,
    payload: {
      size,
      count,
      id: Date.now(),
      order: newObject,
    },
  };
};
export const deletedProduct = (id) => {
  return {
    type: DELETED_ORDER,
    payload: id,
  };
};
export const totalPrice = (total) => {
  return {
    type: TOTAL_ORDER,
    payload: total,
  };
};
