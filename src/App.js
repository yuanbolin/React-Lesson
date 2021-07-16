import {Link, withRouter} from "react-router-dom";
import {Button} from "antd"
import React from "react";

import {ThemeContext, themes} from "./utils/common";
import Welcome from "./components/welcome";
import TemperatureInput from "./components/TemperatureInput";
import logo from './logo.svg';
import './App.css';

const ref=React.createRef()

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            temperature: '',
            type: '',
            theme: themes.light
        }
    }


    componentDidMount() {
        console.log('ref',ref)
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

    toggleTheme = () => {
        this.setState(state => ({
            theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
        }));
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
        let {background} = this.context
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p style={{background: background}}>
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
                    <Button onClick={this.toggleTheme}>修改颜色</Button>
                    <ThemeContext.Provider value={this.state.theme}>
                        <Welcome>
                            <div>我是solt插槽</div>
                        </Welcome>
                    </ThemeContext.Provider>

                    <TemperatureInput ref={ref} scale={"C"} temperature={Celsius}
                                      CelsiusInputChange={this.CelsiusInputChange}></TemperatureInput>
                    <TemperatureInput scale={"F"} temperature={Fahrenheit}
                                      FahrenheitInputChange={this.FahrenheitInputChange}></TemperatureInput>
                </header>
            </div>
        );
    }
}

App.contextType = ThemeContext
export default withRouter(App);
