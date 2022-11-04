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
import { selectCart } from "../../redux/products/product.selector";
import { deletedProduct } from "../../redux/products/product.action";
import { useEffect, useState } from "react";

const CartList = ({
  nextStep,
  prevStep,
  school,
  selectCart,
  deletedProduct,
}) => {
  const itemDeleted = (id) => {
    deletedProduct(id);
  };

  const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   selectCart.forEach((item) => {
  //     setTotal(total + (item.count * item.size.unitprice.cashprice));
  //   });

  //   console.log(total);
  // }, []);

  return (
    <ContainerList>
      {selectCart.length >= 1 &&
        selectCart.map((item, id) => {
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
                <BtnEdit>
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
  step: selectStep,
  selectCart: selectCart,
});

const mapDispatchToProps = {
  nextStep,
  prevStep,
  twoStep,
  deletedProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
