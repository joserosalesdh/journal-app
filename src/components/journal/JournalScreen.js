import React from 'react'
import Sidebar from './Sidebar'
import NoteScreen from './notes/NoteScreen'
import { useSelector } from 'react-redux'
import NothingSelected from './NothingSelected'

const JournalScreen = () => {

    const { active } = useSelector(state => state.notes) //   Poniendo state.notes digo que me interesa del stroe la parte notes y ahi extraigo el active

    return (
        <div className="journal__main-content">


            < Sidebar />

            <main>

                {
                    (active)
                        ? (<NoteScreen />) // si la nota tiene algo voy a regresar mi NoteScreen, porque ahi vamos a mostrar la informacion de la nota activa
                        : (<NothingSelected />) // Si no voy a mostrar este componente
                }

            </main>
        </div>
    )
}

export default JournalScreen
