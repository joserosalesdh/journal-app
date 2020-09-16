
// {
//     notes: [],
//     active: null,
//     active: {
//         id:'dsagfdesagrewg43grewavdfszvd',
//         title: '',
//         body: '',
//         imageUrl: '',
//         date: 1234156231
//     }
// }

import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.notesAddNew:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }

        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }

        case types.notesUpdate:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                        ? action.payload.note //ese note seria el de la linea 69 de note.js
                        : note
                )
            }

        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter(note => note.id !== action.payload) //voy a regresar todas menos l aque yo selecciones en action.payload
            }

        case types.notesLogoutCleaning:
            return {
                ...state,
                active: null,
                notes: []
            }

        default:
            return state;
    }

}