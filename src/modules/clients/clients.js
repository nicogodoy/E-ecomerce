import styled from "styled-components";

const ClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  width: 400px;
`;
const TitleH3 = styled.h3`
  margin-right: 10px;
  font-size: 1.5rem;
  font-weight: 100;
`;

const BtnRegister = styled.button`
  align-self: flex-start;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  color: blue;
  margin-bottom: 60px;
  font-size: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  background: gray;
  padding: 15px 5px;
  border: none;
  border-radius: 5px;
`;

const ButtonClients = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  width: 300px;
  height: 75px;
  font-size: 30px;
  margin-top: 10px;
`;

const DivSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export {
  ButtonClients,
  DivSearch,
  ClientsContainer,
  InputContainer,
  TitleH3,
  Input,
  BtnRegister,
};
