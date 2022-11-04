import React, { useState, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";

const FlexModal = styled.div`
  display: flex;
`;

const ContainerSizes = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: space-between;
`;
const ContainerDiv = styled.div`
  width: 100%;
  max-width: 200px;
`;
const ButtonOption = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  &:hover {
    background: ${props => props.theme.main.tertiary};
    color:white;
  }
`;
const ButtonSizes = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  &.active {
    background: ${(props) => props.theme.main.tertiary};
    color: white;
  }
`;
const ContainerCount = styled.div`
  width: 80px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
const TitleH3 = styled.h3`
  margin-bottom: 10px;
`;
const Price = styled.p`
  margin-bottom: 10px;
  margin-top: 10px;
`;
const ButtonAdd = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
`;

function ModalProduct({ productModal, addProducts, close, products }) {
  const [count, setCount] = useState(1);
  const [size, setSize] = useState(null);
  const containerButton = useRef(null);

  const changeSize = (productSize, e) => {
    let buttons = containerButton.current.querySelectorAll("button");
    let arrayButton = Array.from(buttons);
    let active = arrayButton.find((item) => item.classList.contains("active"));

    if (active) {
      active.classList.remove("active");
    }

    e.target.classList.add("active");
    setSize(productSize);
  };

  const addProduct = () => {
    if (size) {
      addProducts(size, count, products);
      close();
    } else {
      window.alert("seleccione un talle");
    }
  };

  const substract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const add = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <FlexModal>
        <div>
          <div>
            <Image
              src="/images/remera.png"
              alt={productModal.name}
              width={320}
              height={320}
              objectFit={"contain"}
            />
          </div>
        </div>
        <ContainerDiv>
          <h2>{productModal.name}</h2>
          <Price>${productModal.sizes[0].unitprice.cashprice}</Price>
          <div>
            <TitleH3>Sizes</TitleH3>
            <ContainerSizes ref={containerButton}>
              {productModal.sizes.map((product) => {
                return (
                  <ButtonSizes
                    onClick={(e) => {
                      changeSize(product, e);
                    }}
                    key={product._id}
                  >
                    {product.size}
                  </ButtonSizes>
                );
              })}
            </ContainerSizes>
          </div>

          <div>
            <ContainerCount>
              <ButtonOption onClick={substract}>-</ButtonOption>
              <p>{count}</p>
              <ButtonOption onClick={add}>+</ButtonOption>
            </ContainerCount>
            <ButtonAdd onClick={addProduct}>Add to cart</ButtonAdd>
          </div>
        </ContainerDiv>
      </FlexModal>
    </>
  );
}

export default ModalProduct;
