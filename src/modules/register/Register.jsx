import React from "react";
import {
  ContainerRegister,
  LabelContainer,
  LabelText,
} from "../../modules/register";
import { Button, DivSearch } from "../../stylesContainers/container";
import { Input } from "../../stylesContainers/clients";

function Register({ nextStep }) {
  return (
    <ContainerRegister>
      <LabelContainer>
        <LabelText>Nombre</LabelText>
        <Input />
      </LabelContainer>
      <LabelContainer>
        <LabelText>Teléfono</LabelText>
        <Input />
      </LabelContainer>
      <LabelContainer>
        <LabelText>Email</LabelText>
        <Input />
      </LabelContainer>
      <LabelContainer>
        <LabelText>Colegio</LabelText>
        <Input />
      </LabelContainer>
      <Button onClick={nextStep} style={{ marginTop: "10px" }}>
        Continuar
      </Button>
    </ContainerRegister>
  );
}

export default Register;
