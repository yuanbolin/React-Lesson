import React from "react";
import { Input,Button } from 'antd';

class Login extends React.Component {
    constructor() {
        super();
    }

    render() {
        if(this.props.match.params?.id)console.log('路由传参id：',JSON.parse(this.props.match.params.id))
        return (
            <>
               <div style={{width:'500px',margin:'100px auto'}}>
                   <div style={{ marginBottom: 16 }}>
                       <Input addonBefore="账号" addonAfter="phone"/>
                   </div>
                   <div style={{ marginBottom: 16 }}>
                       <Input addonBefore="密码" type={'password'} addonAfter="大于6位"/>
                   </div>
                   <Button type="primary">登录</Button>
               </div>
            </>
        );
    }
}

export default Login;
