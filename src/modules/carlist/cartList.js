import styled from "styled-components";

const ContainerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  background: ${(props) => props.theme.background.primary};
`;
const DivList = styled.div`
  width: 100%;
  display: flex;
  background: ${(props) => props.theme.background.tertiary};
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const BtnContainer = styled.div`
  display: flex;
`;
const BtnEdit = styled.button`
  display: flex;
  background-color: transparent;
  color: orange;
  padding: 15px;
  border: none;
  font-size: 20px;
`;
const BtnDeleted = styled.button`
  display: flex;
  color: red;
  background-color: transparent;
  padding: 15px;
  border: none;
  font-size: 20px;
  margin-right: 10px;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextP = styled.p`
  margin-right: 20px;
`;
export {
  ContainerList,
  DivList,
  BtnEdit,
  BtnDeleted,
  BtnContainer,
  ProductContainer,
  TextP,
};
