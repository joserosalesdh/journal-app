import { db } from "../firebase/firebase-config";


export const startNewNote = () => {
    return async (dispatch, getState) => { // getSate funcion para obtener el state, muy parecido al useSelector pero aca ya tengo acceso al state

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote)

        console.log(docRef)

    }
}