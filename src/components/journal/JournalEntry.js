import React from 'react'

const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://marcianosmx.com/wp-content/uploads/2013/08/minimoo64_fractals_01.jpg'
                }}
            >

            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title"> Un nuevo dia</p>
                <p className="journal__entry-content"> lorem1dasdasdasd</p>

            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}

export default JournalEntry
