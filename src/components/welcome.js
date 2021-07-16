import React from "react";
import {ThemeContext} from "../utils/common";

class Welcome extends React.Component {
    render() {
        let {background}=this.context
        return (
            <div className="App" style={{background:background}}>
                {this.props.children}
            </div>
        );
    }
}
Welcome.contextType=ThemeContext
export default Welcome;
