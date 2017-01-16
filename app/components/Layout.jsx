import React from "react";
import Button from "components/Button";

const Tab = ({ selected, children }) => (
    <div className={"tab" + (selected ? " selected" : "")}>
        { children }
    </div>
);

const Section = ({ title, more, children }) => {
    let moreButton, moreButtonClass;

    if (more) {
        moreButton = (
            <Button style="more-button center" onClick={more}>…</Button>
        );

        moreButtonClass = "more-button";
    }

    let classes = [
        "column title title-mini",
        moreButtonClass
    ];
    
    return (
        <div className="section">
            <div className="row">
                { children }
            </div>

            <div className="row">
                <div className={classes.join(" ")}>
                    { title }
                </div>

                { moreButton }
            </div>
        </div>
    );
};

const Row = ({ children }) => <div className="row">{ children }</div>;

const Column = ({ children }) => <div className="column">{ children }</div>;

export { Tab, Section, Row, Column };
