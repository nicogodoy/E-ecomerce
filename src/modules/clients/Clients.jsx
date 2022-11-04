import React from "react";

import {
  ButtonClients,
  DivSearch,
  ClientsContainer,
  InputContainer,
  TitleH3,
  Input,
  BtnRegister,
} from "../../modules/clients/clients";



function Clients({ nextStep, twoStep }) {



  return (
    <DivSearch>
      <ClientsContainer>
        <InputContainer>
          <TitleH3>Cliente</TitleH3>
          <Input />
        </InputContainer>
        <BtnRegister onClick={nextStep}>Registrar Cliente</BtnRegister>
        <ButtonClients onClick={twoStep}>Continuar</ButtonClients>
      </ClientsContainer>
    </DivSearch>
  );
}

export default Clients;
