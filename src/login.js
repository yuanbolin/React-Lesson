import React from "react";


class Login extends React.Component {
    constructor() {
        super();
    }

    render() {
        if(this.props.match.params?.id)console.log('路由传参id：',JSON.parse(this.props.match.params.id))
        return (
            <div className="Login">
                登录
            </div>
        );
    }
}

export default Login;
