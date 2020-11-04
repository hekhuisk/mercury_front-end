import React from "react";

const DateDisplay = (props) => {
    const { date } = props;

    const dateObject = new Date(Date.parse(date));
    const dateFormatter = new Intl.DateTimeFormat('en-US');

    return (
        <span>{dateFormatter.format(dateObject)}</span>
    );
}

export default DateDisplay;