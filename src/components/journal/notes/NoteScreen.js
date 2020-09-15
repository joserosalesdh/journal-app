import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../../actions/notes';
import { useForm } from '../../../hooks/useForm';
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes); // Renombre active a note
    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title } = formValues;

    const activeId = useRef(note.id); // use Ref me permite almacenar una variable inmutable que no va a redibujar todo el componente si cambia
    // useEffect video 262, con esto logro que cuando todo los diferentes div se cambie a la nota que seleccione y no me quede fija a la vista solo la primera q vi
    useEffect(() => { //La idea es que esto se dispare si i solo si la nota id cambio y si cambio tengo que establecer la nueva nota activa para evitar el ciclo infinito
        if (note.id !== activeId.current) { //si son diferentes necesito resetear el formulario
            reset(note);
            activeId.current = note.id
        }
    }, [note, reset])

    useEffect(() => { // ESte lo uso para cambia mi titulo y body y lo que pueda
        dispatch(activeNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch])

    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                    name="title"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                    name="body"
                >

                </textarea>

                {
                    (note.url)
                    && //si url existe entonces...
                    (<div className="notes__image">
                        <img
                            src="https://marcianosmx.com/wp-content/uploads/2013/08/minimoo64_fractals_01.jpg"
                            alt="dasdasd"
                        />
                    </div>)
                }


            </div>

        </div>
    )
}

export default NoteScreen
