import React from "react";

class Welcome extends React.Component {
    render() {
        return (
            <div className="App">
                {this.props.children}
            </div>
        );
    }
}

export default Welcome;
