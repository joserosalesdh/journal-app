import { types } from "../types/types"


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
// El payload va a ser un objeto que tiene el uid y displayName