import React from "react";
import PropTypes from "prop-types";
import {Table as SemanticTable} from "semantic-ui-react";

export default function Header(props) {
    const {
        children
    } = props;

    return (
        <SemanticTable.Header>
            <SemanticTable.Row>
                {React.Children.map(children, child => {
                    return React.cloneElement(child, {
                        headerCell: true
                    })
                })}
            </SemanticTable.Row>
        </SemanticTable.Header>
    );
}

Header.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node)
}