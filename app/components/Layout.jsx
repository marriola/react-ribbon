import React from "react";

const Tab = ({ selected, children }) => (
    <div className={"tab" + (selected ? " selected" : "")}>
        { children }
    </div>
);

class Section extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="section">
                <div className="row">
                    { this.props.children }
                </div>
                <div className="row title title-mini">
                    { this.props.title }
                </div>
            </div>
        );
    }
}

class Row extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="row">
                { this.props.children }
            </div>
        );
    }
}

class Column extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="column">
                { this.props.children }
            </div>
        );
    }
}

export { Tab, Section, Row, Column };
