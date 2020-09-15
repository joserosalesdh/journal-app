import { db } from "../firebase/firebase-config"


export const loadNotes = async (uid) => {
    const notesSnap = await db.collection(`${uid}/journal/notes`).get(); // Esto es una promesa que ya me regresa la colección 
    const notes = [];

    notesSnap.forEach(snapHijo => {
        // console.log(snapHijo.data());
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })
    console.log(notes)

    return notes;
}