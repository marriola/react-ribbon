import React from "react";
import Button from "components/Button";

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
        let moreButton, moreButtonStyle;

        if (this.props.more) {
            moreButton = (
                <Button style="more-button center" onClick={this.props.more}>…</Button>
            );

            moreButtonStyle = "more-button";
        }
        
        return (
            <div className="section">
                <div className="row">
                    { this.props.children }
                </div>

                <div className="row">
                    <div className={["column title title-mini", moreButtonStyle].join(" ")}>
                        { this.props.title }
                    </div>

                    { moreButton }
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
