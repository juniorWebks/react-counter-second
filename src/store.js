import { createStore, combineReducers } from 'redux'
// import { addAction } from './state/add'
import counter, { incAction, decAction } from './state/counter'
import add from './state/add'
import calculator, { inputAction, addAction } from './state/calculator'


const reducer = combineReducers({
    counter,
    add,
    calculator //kolejny reducer po czym robimy kaczke
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// window.counterInc = () => store.dispatch(incAction())
// window.counterDec = () => store.dispatch(decAction())

// window.counterInc = () => store.dispatch(incAction())
// window.counterDec = () => store.dispatch(decAction())

//automatic testing

const getDisplayedVal = () => {
    const state = store.getState().calculator

    return state.isResultShown ? state.result : state.input
}

// store.dispatch(inputAction(6))
// if (getDisplayedVal() !== 6) {
//     throw new Error('Input not works! Should be 6!')
// }
// store.dispatch(inputAction(7))
// if (getDisplayedVal() !== 67) {
//     throw new Error('Input not works! Should be 67!')
// }
// store.dispatch(inputAction(3))
// if (getDisplayedVal() !== 673) {
//     throw new Error('Input not works! Should be 673!')
// }

// store.dispatch(addAction())
// if (getDisplayedVal() !== 673) {
//     throw new Error('Add not works! Should be 673!')
// }
// store.dispatch(inputAction(3))
// if (getDisplayedVal() !== 3) {
//     throw new Error('Input not works! Should be 3!')
// }
// store.dispatch(addAction())
// if (getDisplayedVal() !== 676) {
//     throw new Error('Add not works! Should be 676!')
// }
//functions in window are only for manual testing

window.inputAction = number => store.dispatch(inputAction(number))

window.state = () => {
    const state = store.getState().calculator


    console.log({
        ...state, display: state.isResultShown ? state.result : state.input

    })
}