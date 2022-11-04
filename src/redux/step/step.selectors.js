import { createSelector } from 'reselect'

const SELECT_STEP = state => state.step

export const selectStep = createSelector(
    [SELECT_STEP],
    step => step.step
)
