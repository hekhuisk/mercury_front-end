import React from "react";

const URLLink = (props) => {
    const {
        label,
        url
    } = props;

    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            {label ? label : url}
        </a>
    );
};

export default URLLink;