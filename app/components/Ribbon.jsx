import React from "react";
import autobind from "autobind-decorator";

export default class Ribbon extends React.Component {
    constructor(props) {
        super(props);

        let preselected = props.children.findIndex(x => x.props.preselected);

        this.state = {
            selected: preselected > -1 ?
                preselected :
                0
        };
    }

    selectTab(selected) {
        this.setState({ selected });
    }

    render() {
        let tabIndex = -1;
        let { selected } = this.state;
        
        return (
            <div className="ribbon-container">
                <div className="ribbon">
                    <ul className="tab-strip">
                        { React.Children.map(this.props.children, x => (
                              <li key={"tab" + tabIndex}
                                  className={ ++tabIndex == selected ? "selected" : null }
                                  onClick={ this.selectTab.bind(this, tabIndex) } >
                                  { x.props.title }
                              </li>
                          )) }
                    </ul>

                    { void(tabIndex = -1) }
                    
                    { React.Children.map(this.props.children, x =>
                        ++tabIndex == selected ?                          
                              React.cloneElement(x, { selected: true }) :
                              x
                    ) }
                </div>
            </div>
        );
    }
}
