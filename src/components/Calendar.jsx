import React from 'react';
import { Calendar as PrimeReactCalendar } from 'primereact/calendar';

const Calendar = (props) => {
    const {
        children,
        ...otherProps
    } = props;

    return (
        <PrimeReactCalendar {...otherProps}>{children}</PrimeReactCalendar>
    );
};

export default Calendar;
