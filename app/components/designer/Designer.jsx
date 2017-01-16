import React from "react";
import autobind from "autobind-decorator";
import { Section } from "components/Layout";
import Button from "components/Button";
import { Element, SectionElement, RowElement, ColumnElement, ButtonElement } from "components/designer/Elements";

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
            buttonIcon: "",
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
        this.setState({
            buttonTitle: e.target.value
        });
    }

    changeButtonIcon(e) {
        this.setState({
            buttonIcon: e.target.value
        });
    }

    addButton() {
        let { section, buttonTitle, buttonIcon } = this.state;        
        section = section.clone();

        section.props.children = section.props.children || [];
        section.props.children.push(new ButtonElement({ title: buttonTitle, icon: buttonIcon }));
        
        this.setState({
            buttonTitle: Designer.DefaultText.NEW_BUTTON,
            buttonIcon: "",
            section
        });
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
                </label>
                <br/>

                <label>
                    Icon
                    <input type="text" value={this.state.buttonIcon} onChange={this.changeButtonIcon} className="margin-left-5" />
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
