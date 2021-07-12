import React from "react";
import {Layout, Menu, Icon, Descriptions} from 'antd';

import home_css from './home_css.css';

const {Header, Footer, Sider, Content} = Layout;
const {SubMenu} = Menu;

class Home extends React.Component {

    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <Layout style={{height: '100vh'}}>
                <Header>
                    <div className={'header'}>
                        Header
                    </div>
                </Header>
                <Layout>
                    <Sider>
                        <Menu
                            onClick={this.handleClick}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
              <Icon type="mail"/>
              <span>Navigation One</span>
            </span>
                                }
                            >
                                <Menu.ItemGroup key="g1" title="Item 1">
                                    <Menu.Item key="1">Option 1</Menu.Item>
                                    <Menu.Item key="2">Option 2</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="g2" title="Item 2">
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="appstore"/>
                                         <span>Navigation Two</span>
                                     </span>
                                }
                            >
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu
                                key="sub4"
                                title={
                                    <span>
              <Icon type="setting"/>
              <span>Navigation Three</span>
            </span>
                                }
                            >
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content>
                        <Descriptions
                            title="Responsive Descriptions"
                            bordered
                            column={{xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1}}
                        >
                            <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                            <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
                            <Descriptions.Item label="time">18:00:00</Descriptions.Item>
                            <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
                            <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                            <Descriptions.Item label="Official">$60.00</Descriptions.Item>
                            <Descriptions.Item label="Config Info">
                                Data disk type: MongoDB
                                <br/>
                                Database version: 3.4
                                <br/>
                                Package: dds.mongo.mid
                                <br/>
                                Storage space: 10 GB
                                <br/>
                                Replication factor: 3
                                <br/>
                                Region: East China 1
                            </Descriptions.Item>
                        </Descriptions>
                    </Content>
                </Layout>
                <Footer style={{textAlign: 'center'}}>代码学习-Footer</Footer>
            </Layout>
        )
    }
}

export default Home;
