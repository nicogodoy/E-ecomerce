import { NEXT_STEP, PREV_STEP , TWO_STEP} from './step.types'

const INITIAL_STATE = {
    step: 1,
}

const stepsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEXT_STEP:
            return {
                ...state,
                step: state.step + 1,
            }
        case PREV_STEP:
            return {
                ...state,
                step: state.step === 1 ? 1 : state.step - 1,
            }
            case TWO_STEP:
            return {
                ...state,
                step: state.step + 2,
            }
        default:
            return state
    }
}

export default stepsReducer
