import { NEXT_STEP, PREV_STEP, TWO_STEP} from "./step.types";

export const nextStep = () => ({
  type: NEXT_STEP,
});

export const prevStep = () => ({
  type: PREV_STEP,
});

export const twoStep = () => ({
  type: TWO_STEP,
});
