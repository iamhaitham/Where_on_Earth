import React from 'react';

const Flag = props => {

    const style = {
        width : "100px",
        height : "70px",
        margin : "20px 20px 0 20px",
    }

    const {link, country, SCB} = props;

    const handleClick = e => {
        e.preventDefault();
        SCB(country);
    }

    return (
        <div>
            <img src={link} alt={country} style={style} onClick={handleClick}/>
            <p>{country.slice(0,9)}</p>
        </div>
    )
}

export default Flag