const INPUT = 'calculator/INPUT' //2.typ akcji
const ADD = 'calculator/ADD'
const SUBSTRACT = 'calculator/SUBSTRACT'

// 3.action creation dla input
export const inputAction = number => ({
    type: INPUT,
    number
})

const initialState = { //1. initial state
    result: 0,
    input: 0,
    isResultShown: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INPUT:
            return {
                ...state,
                input:state.input * 10 + action.number,
                isResultShown: false //czy jest pokazany czy nie ma nie być pokazany
            }
        default:
            return state
    }

}