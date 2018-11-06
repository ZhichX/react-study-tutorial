import React, {Component} from "react";
import Table from "./Table.js";
import Form from "./Form.js";

const name = "World";
const heading = <h1 className="site-heading">Hello, {name}!!</h1>;
const heading1 = React.createElement('h1', {className: "site-heading"}, React.createElement('span', {}, 'Hello, React!!!'));

class App extends Component {
    state = {
        characters: []
    };

    removeChars = index => {
        const {characters} = this.state;

        this.setState({
            characters: characters.filter((c, i) => {
                return i !== index;
            })
        });
    };

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]})
    };

    render() {
        return (
            <div className="Container">
                <Table
                    charsData={this.state.characters}
                    removeChars={this.removeChars}
                />
                <Form handleSubmit={this.handleSubmit}/>
                <span className="App">
                    {heading}
                    {heading1}
                </span>
            </div>
        );
    }
}

export default App;