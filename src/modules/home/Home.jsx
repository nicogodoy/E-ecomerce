import { connect } from "react-redux";
import { ContainerStyle, CenterButton, Button } from "../../stylesContainers/container";
import { nextStep } from "../../redux/step/step.actions";

const Home = ({ ...state }) => {

  const { ...actions } = state;
  const { nextStep } = actions;

  return (
    <ContainerStyle>
      <CenterButton>
        <Button onClick={nextStep}>Nueva venta</Button>
      </CenterButton>
    </ContainerStyle>
  );
};

const mapDispatchToProps = {
  nextStep,
};

export default connect(null, mapDispatchToProps)(Home) 
