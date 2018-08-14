
const ADD = 'add/ADD'

export const addAction = number =>({
    type:ADD,
    number
})

const initialState = {
    result: 0

}

// export const addAction = result => ({
//     type:ADD,
//     result
// })



export default (state = initialState, action) =>
{
    switch(action.type){
        case ADD:
        return{
            ...state, // to piszemy zawsze
result:state.result + action.number
        }
        default:
        return state
    }
}

