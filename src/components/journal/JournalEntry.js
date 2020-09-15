import React from 'react';
import moment from 'moment';
import { activeNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';

const JournalEntry = ({ id, date, title, body, url }) => {

    const noteDate = moment(date);

    const dispatch = useDispatch();

    const handleEntryClick = () => {
        dispatch(activeNote(id, {
            date, title, body, url
        })
        );
    }

    return (
        <div
            className="journal__entry pointer"
            onClick={handleEntryClick}
        >

            {
                url && // si el url es diferente de undefined entonces muestra esto
                <div
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                    }}
                ></div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title"> {title}</p>
                <p className="journal__entry-content"> {body}</p>

            </div>

            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>
        </div>
    )
}

export default JournalEntry
