import { createSelector } from 'reselect'

const SELECT_SCHOOLS = state => state.school

export const selectSchools = createSelector(
    [SELECT_SCHOOLS],
    school => school.school
)

export const selectSchoolsId = createSelector(
    [SELECT_SCHOOLS],
    selectSchoolsId => selectSchoolsId.selectSchoolsId
)