import React from "react";
import { Section, Row, Column } from "components/Layout";
import Button from "components/Button";

function cloneArray(arr) {
    return arr.map(x => arr.clone());
}

function nullable(name, value) {
    if (value) {
        return `${name}=${value}`;
    }
    else {
        return "";
    }
}

class Element {
    constructor({ type, children = [] }) {
        this.props = {
            type,
            children
        };
    }

    toString() {
        let { type, children = [] } = this.props;
        children = children.map(x => x.toString()).join("");
        
        return `<${type}>${children}</${type}>`;
    }
}

class SectionElement extends Element {
    constructor({ title, children }) {
        super({ type: "Section" });

        this.props = {
            ...this.props,
            title,
            children
        };
    }

    toElement() {
        let { title, children = [] } = this.props;
        
        return (
            <Section title={title}>
                { children.map(x => x.toElement()) }
            </Section>
        );
    }

    clone() {
        let { title, children = [] } = this.props;
        
        return new SectionElement({
            title,
            children: cloneArray(children)
        });
    }

    toString() {
        let { title, children = [] } = this.props;
        children = children.map(x => "\n  " + x.toString()).join("");
        
        return `<Section ${nullable("title", title)}>${children}\n</Section>`;
    }
}

class RowElement extends Element {
    constructor(children) {
        super({
            type: "Row",
            children
        });
    }

    toElement() {
        let { children = [] } = this.props;
        
        return (
            <Row>
                { children.map(x => x.toElement()) }
            </Row>
        );
    }

    clone() {
        return cloneArray(this.props.children);
    }
}

class ColumnElement extends Element {
    constructor() {
        super({
            type: "Column",
            children
        });
    }

    toElement() {
        let { children = [] } = this.props;
        
        return (
            <Column>
                { children.map(x => x.toElement()) }
            </Column>
        );
    }

    clone() {
        return cloneArray(this.props.children);
    }
}

class ButtonElement extends Element {
    constructor({ title, icon }) {
        super({ type: "Button" });

        this.props = {
            ...this.props,
            title,
            icon
        };
    }

    clone() {
        let { title, icon } = this.props;
        
        return new ButtonElement({ title, icon });
    }

    toElement() {
        let { title, icon } = this.props;
        return <Button title={title} icon={icon} />;
    }

    toString() {
        let { title, icon } = this.props;
        
        return `<Button ${nullable("title", title)} ${nullable("icon", icon)} />`;
    }
}

export { Element, SectionElement, RowElement, ColumnElement, ButtonElement };
