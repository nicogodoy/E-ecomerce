import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectStep } from "../../redux/step/step.selectors";
import { nextStep, prevStep, twoStep } from "../../redux/step/step.actions";
import {
  ContainerList,
  DivList,
  BtnDeleted,
  BtnEdit,
  BtnContainer,
  ProductContainer,
  TextP,
} from "./cartList";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Image from "next/image";
import { IconBack } from "../showproducts/showproducts";
import { selectCart, selectProducts } from "../../redux/products/product.selector";
import { deletedProduct } from "../../redux/products/product.action";
import { useState } from "react";
import Swal from "sweetalert2";
import Popup from "../../components/popup/Popup";
import ModalEdit from "../../components/modaledit/ModalEdit";
const CartList = ({ ...state }) => {
  const [modal, setModal] = useState(false);
  const [idProduct, setIdProduct] = useState(null);


  const { cart,products, ...action } = state;
  const { nextStep, prevStep, deletedProduct } = action;

  const itemDeleted = (id) => {
    Swal.fire({
      title: "Estas seguro que deseas eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletedProduct(id);
        Swal.fire(
          "Eliminado!",
          "Este producto fue eliminado correctamente.",
          "success"
        );
      }
    });
  };

  const [total, setTotal] = useState(0);

  const openModalEdit = (item) => {
    setIdProduct(item.order._id);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <ContainerList>
      {modal && (
        <Popup close={closeModal}>
          <ModalEdit close={closeModal} products={products} cart={cart} idProduct={idProduct} />
        </Popup>
      )}
      {cart.length >= 1 &&
        cart.map((item, id) => {
          return (
            <DivList key={id}>
              <ProductContainer>
                <Image
                  src="/images/remera.png"
                  width={80}
                  height={80}
                  objectFit={"contain"}
                />
                <TextP>{item.order.name}</TextP>
                <TextP>Talle:{item.size.size}</TextP>
                <TextP>Cantidad:{item.count}</TextP>
                <TextP>
                  Precio: ${item.size.unitprice.cashprice * item.count}
                </TextP>
              </ProductContainer>
              <BtnContainer>
                <BtnDeleted
                  onClick={() => {
                    itemDeleted(item.id);
                  }}
                >
                  <AiFillDelete />
                </BtnDeleted>
                <BtnEdit onClick={() => openModalEdit(item)}>
                  <AiFillEdit />
                </BtnEdit>
              </BtnContainer>
            </DivList>
          );
        })}
      {/* <p>$Total{total}</p> */}
      <IconBack onClick={prevStep}>
        <BsFillArrowLeftCircleFill />
      </IconBack>
    </ContainerList>
  );
};

const mapStateToProps = createStructuredSelector({
  cart: selectCart,
  products: selectProducts,
});

const mapDispatchToProps = {
  nextStep,
  prevStep,
  twoStep,
  deletedProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
