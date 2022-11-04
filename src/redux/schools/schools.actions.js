import { SAVE_SCHOOL } from "./schools.type";

export const saveSchool = (id) => ({
  type: SAVE_SCHOOL,
  payload: id,
});
