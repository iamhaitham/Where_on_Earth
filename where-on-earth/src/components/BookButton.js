import { navigate } from '@reach/router';
import React from 'react'

const BookButton = props => {

    const {agencyId, tourId, tourName} = props;

    const handleClick = e => {
        e.preventDefault();
        navigate("/"+tourName+"/"+agencyId+"/"+tourId);
    }
    return (
        <button onClick={handleClick}>
            Book
        </button>
    )
}

export default BookButton
