import { types } from "../types/types"


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        setTimeout(() => {
            dispatch(login(123, 'Pedro'))
        }, 3500);

    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
// El payload va a ser un objeto que tiene el uid y displayName

