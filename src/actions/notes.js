import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";



export const startNewNote = () => {
    return async (dispatch, getState) => { // getSate funcion para obtener el state, muy parecido al useSelector pero aca ya tengo acceso al state

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote)

        dispatch(activeNote(doc.id, newNote)); // Esto hace el dispatch al reducer

    }
}

export const activeNote = (id, note) => ({ //Pongo los parentesis porque voy a regresar un objeto  //video 257
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});

//Accioón para guardar las modificaciones en la base de datos
export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if (!note.url) {    //Antes de hacer la extracción esto es para que no me tire undefined cuando pongo save ya que la url se manda 
            delete note.url; // Lo borro aca y en la liea 54 ya no lo tendriamos 
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id; // De esta manera se que no tendo el id en el objeto

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

        dispatch(refreshNote(note.id, noteToFirestore));
        Swal.fire('Saved', note.title, 'success');

    }
}

//Voy a crear una accion que unicamente actualice de mi store unicamente la nota que cambia
export const refreshNote = (id, note) => ({
    type: types.notesUpdate,
    payload: {
        id,
        note: {
            id,
            ...note //con esto me aseguro que la nota tenga el id, me aseguro que no se borre la key
        }
    }
})

