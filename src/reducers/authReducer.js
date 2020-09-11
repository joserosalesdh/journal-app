import { types } from "../types/types";



// El state tiene que regresa algo porque sino es undefined, por eso lo pongo como objeto vacio
export const authReducer = (state = {}, action) => { // Los reducer reciden dos cosas los state y los action 

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid, //el id viene de firebase que es un identificador unico
                name: action.payload.displayName
            }

        case types.logout:
            return {}

        default:
            return state;
    }
}