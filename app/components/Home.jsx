import React from "react";
import Ribbon from "components/Ribbon";
import Tabs from "components/Tabs";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Ribbon>
                { Tabs }
            </Ribbon>
        );
    }
}
