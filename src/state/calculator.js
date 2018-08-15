const INPUT = 'calculator/INPUT'
const ADD = 'calcuator/ADD'
const SUBSTRACT = 'calcuator/SUBSTRACT'
const MULTIPLY = 'calcuator/MULTIPLY'
const DIVISION = 'calcuator/DIVISION'
const ANSWER = 'calculator/ANSWER'
const RESET = 'calculator/RESET'

export const addAction = () => ({ type: ADD })
export const substractAction = () => ({ type: SUBSTRACT })
export const answerAction = () => ({ type: ANSWER })
export const divisionAction = () => ({ type: DIVISION })
export const multiplyAction = () => ({ type: MULTIPLY })
export const resetAction = () => ({ type: RESET })

export const inputAction = number => ({
  type: INPUT,
  number
})

const initialState = {
  result: 0,
  input: 0,
  isResultShown: false,
  lastOperation: null
}

const calculateResult = currentState => {
  switch (currentState.lastOperation) {
    case ADD:
      return currentState.result + currentState.input
    case SUBSTRACT:
      return currentState.result - currentState.input
    case MULTIPLY:
      return currentState.result * currentState.input
    case DIVISION:
      return currentState.result / currentState.input
    default:
      return currentState.result + currentState.input
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INPUT:
      return {
        ...state,
        input: state.input * 10 + action.number,
        isResultShown: false
      }
    case ADD:
      return {
        ...state,
        result: calculateResult(state),
        input: 0,
        isResultShown: true,
        lastOperation: action.type
      }
    case SUBSTRACT:
      return {
        ...state,
        result: calculateResult(state),
        input: 0,
        isResultShown: true,
        lastOperation: action.type
      }
    case MULTIPLY:
      return {
        ...state,
        result: calculateResult(state),
        input: 0,
        isResultShown: true,
        lastOperation: action.type
      }
    case DIVISION:
      return {
        ...state,
        result: calculateResult(state),
        input: 0,
        isResultShown: true,
        lastOperation: action.type
      }
    case ANSWER:
      return {
        ...state,
        result: calculateResult(state),
        input: 0,
        isResultShown: true,
        lastOperation: initialState.lastOperation
      }
    case RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}