import Image from "next/image";
import { ListContainer, BoxSchool } from "./schools";
import { IconBackSchools } from "./schools";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectStep } from "../../redux/step/step.selectors";
import { selectSchools } from "../../redux/schools/schools.selector";
import { nextStep, prevStep, twoStep } from "../../redux/step/step.actions";
import { saveSchool } from "../../redux/schools/schools.actions";

const AllSchools = ({ nextStep, prevStep, saveSchool, school }) => {
  const getSchool = (id) => {
    saveSchool(id);
    nextStep();
  };

  const getMoreOptions = () => {
    alert("Conseguir mas colegios");
  };

  return (
    <ListContainer>
      {school.map((ch) => (
        <BoxSchool key={ch._id} onClick={() => getSchool(ch._id)}>
          <Image src={ch.logo} alt={ch.label} width={150} height={150} />
        </BoxSchool>
      ))}

      <IconBackSchools onClick={prevStep}>
        <BsFillArrowLeftCircleFill />
      </IconBackSchools>
    </ListContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  step: selectStep,
  school: selectSchools,
});

const mapDispatchToProps = {
  nextStep,
  prevStep,
  twoStep,
  saveSchool,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllSchools);
