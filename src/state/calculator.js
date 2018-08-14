const INPUT = 'calculator/INPUT' //2.typ akcji
const ADD = 'calculator/ADD'
const SUBSTRACT = 'calculator/SUBSTRACT'

export const addAction = () => ({ type: ADD })

// 3.action creation dla input
export const inputAction = number => ({
    type: INPUT,
    number
})

const initialState = { //1. initial state
    result: 0,
    input: 0,
    isResultShown: false,
    isOperation: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INPUT:
            return {
                ...state,
                input: state.input * 10 + action.number,
                isResultShown: false //czy jest pokazany czy nie ma nie być pokazany
            }
        case ADD:
            return {
                ...state,
                result: state.result + state.input,
                input: 0,
                isResultShown: true,
                lastOperation: action.type

            }
        default:
            return state
    }

}