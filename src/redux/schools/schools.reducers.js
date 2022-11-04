import { SAVE_SCHOOL } from "./schools.type";
import schools from '../../data/schools'

const INITIAL_STATE = {
  school: schools,
  selectSchoolsId:null
};

const schoolReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_SCHOOL:
      return {
        ...state, selectSchoolsId: action.payload
      };

    default:
      return state;
  }
};

export default schoolReducer;
