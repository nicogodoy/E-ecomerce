import styled from "styled-components";

const ContainerRegister = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  width: 420px;
  margin: 0 auto;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const LabelText = styled.label`
  width:120px
`;

export { ContainerRegister, LabelContainer, LabelText };
