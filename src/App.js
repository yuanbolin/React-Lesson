import {Link, withRouter} from "react-router-dom";
import React from "react";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render() {
        let id = {
            name:'苑博林',
            age:25
        };
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Hello World
                    </a>
                    {/*//使用Link跳转*/}
                    <Link to={'/home'}>去首页</Link>
                    {/*动态传参*/}
                    <Link to={`/login/${JSON.stringify(id)}`}>去登录</Link>
                    {/*使用history跳转*/}
                    <button onClick={() => this.props.history.push('detail')}>去详情</button>
                </header>
            </div>
        );
    }
}

export default withRouter(App);
