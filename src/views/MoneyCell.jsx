import React from "react";
import MoneyDisplay from "./MoneyDisplay";

const MoneyCell = (props) => (
    <td align='right'><MoneyDisplay amount={props.children || 0} /></td>
);

export default MoneyCell;