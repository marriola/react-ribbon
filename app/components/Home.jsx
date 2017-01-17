import React from "react";
import autobind from "autobind-decorator";
import Ribbon from "components/Ribbon";
import Tabs from "components/Tabs";
import Designer from "components/designer/Designer";

@autobind
export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabs: Tabs
        };
    }

    addSection(section) {
        let { tabs } = this.state;

        firstTab = React.cloneElement(tabs[0], tabs[0].children.concat(section));
        
        let newTabs = [
            firstTab,
            tabs.slice(1)
        ];
        
        this.setState({ tabs: newTabs });
    }

    render() {
        return (
            <div>
                <Ribbon>
                    { this.state.tabs }
                </Ribbon>

                <div style={{ padding: "5px" }}>
                    <Designer newTab={ this.newTab } />
                </div>                
            </div>
        );
    }
}
