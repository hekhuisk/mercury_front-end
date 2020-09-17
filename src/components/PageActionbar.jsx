import React from "react";

const PageActionbar = (props) => {
    const {
        buttons,
        pageTitle
    } = props;

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <h4>{pageTitle}</h4>
            <div>
                {buttons}
            </div>
        </div>
    );
};

export default PageActionbar;