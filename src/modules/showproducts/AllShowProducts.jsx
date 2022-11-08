import Image from "next/image";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectStep } from "../../redux/step/step.selectors";
import {
  ShopContainer,
  BoxSchool,
  Sidebar,
  BtnSidebar,
  IconCart,
  ProductsContainer,
  IconBack,
  CountCart
} from "./showproducts";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { nextStep, prevStep, twoStep } from "../../redux/step/step.actions";
import { selectSchoolsId } from "../../redux/schools/schools.selector";
import dataCategories from "../../data/categories";
import Popup from "../../components/popup/Popup";
import { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import ModalProduct from "../../components/ModalProduct/ModalProduct";
import {
  selectCart,
  selectCategories,
  selectProducts,
} from "../../redux/products/product.selector";
import {
  saveProducts,
  saveCategories,
  addProducts
} from "../../redux/products/product.action";

const AllShowProducts = ({ ...state }) => {

  const { cart, products, categories, selectSchoolsId, ...actions } = state;
  const { nextStep, prevStep, saveProducts, saveCategories, addProducts } = actions;

  const [modal, setModal] = useState(false);
  const [productModal, setProductModal] = useState([]);
  const [categorieSelected, setCategorieSelected] = useState([]);

  useEffect(() => {
    saveProducts(dataCategories, selectSchoolsId);
    saveCategories(dataCategories);
  }, []);

  const openModal = (product) => {
    setProductModal(product);
    setModal(true);
  };

  const changeProduct = (_id) => {
    let productsSchool = products.filter((element) => element.category == _id);
    setCategorieSelected(productsSchool);
  };

  const closeModal = () => {
    setProductModal([]);
    setModal(false);
  };

  console.log(cart);

  return (
    <ShopContainer>
      {modal && (
        <Popup close={closeModal}>
          <ModalProduct products={products} close={closeModal} addProducts={addProducts} productModal={productModal} />
        </Popup>
      )}

      <Sidebar>
        {categories.map((categorie) => {
          return (
            <BtnSidebar
              key={categorie._id}
              onClick={() => changeProduct(categorie._id)}
            >
              {categorie.label}
            </BtnSidebar>
          );
        })}
      </Sidebar>
      <ProductsContainer>
        {categorieSelected.map((product) => (
          <BoxSchool key={product._id} onClick={() => openModal(product)}>
            <Image
              src="/images/remera.png"
              alt={product.name}
              width={150}
              height={150}
              objectFit={"contain"}
            />
            <p>{product.name}</p>
          </BoxSchool>
        ))}
      </ProductsContainer>
      <IconCart onClick={nextStep}>
        <AiOutlineShoppingCart />
        {cart.length >= 1 && <CountCart>{cart.length}</CountCart>}
      </IconCart>
      <IconBack onClick={prevStep}>
        <BsFillArrowLeftCircleFill />
      </IconBack>
    </ShopContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  step: selectStep,
  selectSchoolsId: selectSchoolsId,
  products: selectProducts,
  categories: selectCategories,
  cart: selectCart
});

const mapDispatchToProps = {
  nextStep,
  prevStep,
  twoStep,
  saveProducts,
  saveCategories,
  addProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(AllShowProducts);