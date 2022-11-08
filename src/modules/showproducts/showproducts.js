import styled from "styled-components";

const ShopContainer = styled.div`
  width: 100%;
  display: flex;
`;
const BoxSchool = styled.div`
  background: #fafafa;
  height: 250px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px #23304433;
`;
const Sidebar = styled.div`
  background: black;
  height: 100vh;
  width: 100%;
  max-width: 200px;
  display: flex;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
const BtnSidebar = styled.button`
  background: white;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 40px;
  font-size: 30px;
`;
const IconCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: orange;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  position: absolute;
  bottom: 20px;
  right: 20px;
  border: none;
  font-size: 35px;
`;
const IconBack = styled.button`
  background: none;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  position: absolute;
  bottom: 20px;
  left: 60px;
  border: none;
  font-size: 40px;
  color: gray;
`;
const ProductsContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  height: 100vh;
  overflow-y: scroll;
`;

const CountCart = styled.div`
  position: absolute;
  right: 0;
  left: 50px;
  bottom: 0;
  background: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 800;
`;

export {
  ShopContainer,
  BoxSchool,
  Sidebar,
  BtnSidebar,
  IconCart,
  ProductsContainer,
  IconBack,
  CountCart
};
