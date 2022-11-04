import styled from "styled-components";

const ContainerStyle = styled.div`
  height: 100vh;
  width: 100%;
`;

const CenterButton = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  width: 350px;
  height: 75px;
  font-size: 30px;
  background: ${props => props.theme.main.tertiary};
  color: ${props => props.theme.fonts.tertiary};
`;

export { ContainerStyle, CenterButton, Button };
