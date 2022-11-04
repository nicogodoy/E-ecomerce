import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { nextStep, prevStep, twoStep } from "../../redux/step/step.actions";
import { selectStep } from "../../redux/step/step.selectors";
import Home from "../home/Home";
import AllSchools from "../schools/AllSchools";
import AllShowProducts from "../showproducts/AllShowProducts";
import CartListItems from "../carlist/CartListItems";

const Main = ({ ...state }) => {
  const { step, ...actions } = state;
  const { nextStep, prevStep, twoStep } = actions;

  if (step === 1) return <Home />;
  // if (step === 2) return <Clients twoStep={twoStep} nextStep={nextStep}/>
  // if (step === 3) return <Register nextStep={nextStep} />
  if (step === 2) return <AllSchools />;
  if (step === 3) return <AllShowProducts />;
  if (step === 4) return <CartListItems />;

  return <></>;
};

const mapStateToProps = createStructuredSelector({
  step: selectStep,
});

const mapDispatchToProps = {
  nextStep,
  prevStep,
  twoStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
