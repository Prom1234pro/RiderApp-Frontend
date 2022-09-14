const initialState = {
    user: null
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case "SUCCESS":
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state
    }
}