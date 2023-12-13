import {createActions, handleActions} from "redux-actions";

/* 초기값 */
const initialState = {};

/* 액션 타입 */
const GET_PROGRAMS = 'program/GET_PROGRAMS';
const GET_PROGRAM = 'program/GET_PROGRAM';
const POST_PROGRAM_SUCCESS = 'program/POST_PROGRAM_SUCCESS'; // 등록

/* 액션 함수 */
export const {program: {getPrograms, getProgram, programSuccess}} = createActions({ //액션 객체를 만들어 반환 //s가 붙고 안붙고를 구분해야함.
    [GET_PROGRAMS]: result => ({programs: result.data}),
    [GET_PROGRAM]: result => ({program: result.data}),
    [POST_PROGRAM_SUCCESS] : () => ({programSuccess : true}),

});

/* 리듀서 */
const programReducer = handleActions({
    [GET_PROGRAMS]: (state, {payload}) => payload, // 여기서 반환 되는 값이 state에 저장 되는 값
    [GET_PROGRAM]: (state, {payload}) => payload,
    [POST_PROGRAM_SUCCESS] : (state, {payload}) => payload,

}, initialState);

export default programReducer;