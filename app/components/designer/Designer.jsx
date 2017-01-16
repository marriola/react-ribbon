import React from "react";
import autobind from "autobind-decorator";
import { Section } from "components/Layout";
import Button from "components/Button";

function cloneArray(arr) {
    return arr.map(x => arr.clone());
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
        children = children.map(x => x.toString()).join("");
        
        return `<Section title="${title}">${children}\n</Section>`;
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
        
        return `<Button title=${title} icon=${icon} />`;
    }
}

@autobind
export default class Designer extends React.Component {
    static DefaultText = {
        NEW_SECTION: "New Section",
        NEW_BUTTON: "New Button"
    };
    
    constructor(props) {
        super(props);

        let newSection = new SectionElement({ title: Designer.DefaultText.NEW_SECTION });

        this.state = {
            buttonTitle: Designer.DefaultText.NEW_BUTTON,
            sectionTitle: Designer.DefaultText.NEW_SECTION,
            
            section: newSection
        };
    }

    renderSection() {
        return this.state.section.toString();
    }

    changeTitle(e) {
        let { section } = this.state;
        section = section.clone();

        section.props.title = e.target.value;
        
        this.setState({
            sectionTitle: e.target.value,
            section
        });
    }

    changeButtonTitle(e) {
        this.setState({ buttonTitle: e.target.value });
    }

    addButton() {
        this.setState({ buttonTitle: Designer.DefaultText.NEW_BUTTON });
    }

    render() {
        let { section } = this.state;
        
        let previewStyles = {
            marginTop: "10px",
            border: "1px solid black",
            borderRadius: "7px"
        };
        
        return (
            <div className="designer">
                <label>
                    Section Title
                    <input type="text" value={this.state.sectionTitle} onChange={this.changeTitle} className="margin-left-5" />
                </label>
                <br/>

                <label>
                    Title
                    <input type="text" value={this.state.buttonTitle} onChange={this.changeButtonTitle} className="margin-left-5" />
                    <button onClick={this.addButton}>Add Button</button>
                </label>

                <div className="ribbon-container" style={previewStyles}>
                    <div className="ribbon">
                        <div className="tab selected">
                            { section.toElement() }
                        </div>
                    </div>
                </div>

                <pre>
                    { this.renderSection() }
                </pre>
            </div>
        );
    }
}
