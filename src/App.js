import {Link, withRouter} from "react-router-dom";
import {Button} from "antd"
import React from "react";

import Welcome from "./components/welcome";
import TemperatureInput from "./components/TemperatureInput";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            temperature: '',
            type: ''
        }
    }

    CelsiusInputChange = (value) => {
        this.setState({
            temperature: value,
            type: 'C'
        })
    }

    FahrenheitInputChange = (value) => {
        this.setState({
            temperature: value,
            type: 'F'
        })
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    render() {
        let {temperature, type} = this.state
        let Celsius = temperature, Fahrenheit = temperature
        switch (type) {
            case 'F':
                Celsius = this.toCelsius(temperature)
                break;
            case 'C':
                Fahrenheit = this.toFahrenheit(temperature)
                break;
        }
        let id = {
            name: '苑博林',
            age: 25
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
                    <Button onClick={() => this.props.history.push('detail')}>去详情</Button>
                    <Welcome>
                        <div>我是solt插槽</div>
                    </Welcome>
                    <TemperatureInput scale={"C"} temperature={Celsius}
                                      CelsiusInputChange={this.CelsiusInputChange}></TemperatureInput>
                    <TemperatureInput scale={"F"} temperature={Fahrenheit}
                                      FahrenheitInputChange={this.FahrenheitInputChange}></TemperatureInput>
                </header>
            </div>
        );
    }
}

export default withRouter(App);
