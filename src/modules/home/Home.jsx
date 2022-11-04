import { connect } from "react-redux";
import { ContainerStyle, CenterButton, Button } from "../../stylesContainers/container";
import { nextStep, prevStep, twoStep } from "../../redux/step/step.actions";
import { createStructuredSelector } from "reselect";
import { selectStep } from "../../redux/step/step.selectors";

const Home = ({ nextStep }) => {
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
  prevStep,
  twoStep,
};

export default connect(null,mapDispatchToProps)(Home) 
