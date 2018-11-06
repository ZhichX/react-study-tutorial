import React, {Component} from "react";

// simple component
const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
        </thead>
    );
};

// simple component
const TableBody = props => {
    const rows = props.charsData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeChars(index)}>Delete</button>
                </td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
};
// class component
/* A class component must include render(), and the return can only return one parent element. */
class Table extends Component {
    render() {
        /* the component cannot change the props – they’re read-only */
        const {charsData, removeChars} = this.props;

        return (
            <table>
                <TableHeader/>
                <TableBody
                    charsData={charsData}
                    removeChars={removeChars}
                />
            </table>
        );
    }
}

// Note that if the return is contained to one line, it does not need parentheses.
const SimpleComponent = () => {
    return <div>Simple Component Example</div>
}

class ClassComponent extends Component {
    render() {
        return <div>Class Component Example</div>
    }
}

export default Table;