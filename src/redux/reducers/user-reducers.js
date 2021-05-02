import { STORE_USER } from '../actions'

const user = (
    state = {},
    action
) => {
    switch (action.type) {
        case STORE_USER:
            return Object.assign({}, state, {
                ...action.payload
            })
        default:
            return state
    }
}

export default user