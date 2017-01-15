import React from "react";
import Ribbon from "components/Ribbon";
import { Tab, Section, Row, Column } from "components/Layout";
import Button from "components/Button";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Ribbon>
                <Tab title="File" />
                <Tab title="Home" preselected={true}>
                    <Section title="Navigation">
                        <Column>
                            <Row>
                                <Button style="center" icon="up.gif" />
                            </Row>
                            <Row>
                                
                                <Button icon="left.gif" />
                                <Button icon="right.gif" />
                            </Row>
                            <Row>
                                <Button style="center" icon="down.gif" />
                            </Row>
                        </Column>
                    </Section>

                    <Section title="Clipboard">
                        <Column><Button icon="paste.gif" size={50} title="Paste" /></Column>
                        <Column>
                            <Row><Button icon="cut.gif" size={16} title="Cut" /></Row>
                            <Row><Button icon="copy.gif" size={16} title="Copy" /></Row>
                            <Row><Button icon="edit.gif" size={16} title="Edit" /></Row>
                        </Column>
                    </Section>
                </Tab>
                <Tab title="Layout" />
                <Tab title="Review" />
            </Ribbon>
        );
    }
}
