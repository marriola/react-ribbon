import React from "react";
import Button from "components/Button";
import { Tab, Section, Row, Column } from "components/Layout";

const FileTab = <Tab key="fileTab" title="File" />;

const HomeTab = (
    <Tab key="homeTab" title="Home" preselected={true}>
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

        <Section title="Clipboard" more={alert.bind(null, "Nothing here!")}>
            <Column><Button icon="paste.gif" width={50} title="Paste" /></Column>
            <Column>
                <Row><Button icon="cut.gif" size={16} title="Cut" /></Row>
                <Row><Button icon="copy.gif" size={16} title="Copy" /></Row>
                <Row><Button icon="edit.gif" size={16} title="Edit" /></Row>
            </Column>
        </Section>
    </Tab>
);

const ReviewTab = <Tab key="reviewTab" title="Review" />;

const LayoutTab = <Tab key="layoutTab" title="Layout" />;

const Tabs = [
    FileTab,
    HomeTab,
    ReviewTab,
    LayoutTab
];

export default Tabs;
