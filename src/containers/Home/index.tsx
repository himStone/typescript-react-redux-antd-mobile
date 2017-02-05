import * as React from "react"
import { Link } from 'react-router'
import classNames from 'classnames'

import "antd-mobile/lib/tab-bar/style/css"
//只用样式
import './index.scss'

export default class Home extends React.Component<any, any> {

    private tabBarConfig = [
        {name: "主页", prefixCls: "home-content", router: "home/homeContent", imgPrefixCls: "homeContentIcon"},
        {name: "客户库", prefixCls: "", router: "home/customerList", imgPrefixCls: "customsIcon"},
        {name: "我的", prefixCls: "", router: "home/myInfo", imgPrefixCls: "myInfoIcon"}
    ]
    
	render() {
        return (
             <div>
                <div className="am-tab-bar-bar home-bar">
                    {
                        this.tabBarConfig.map((item, index) => (
                            <Link key={index} 
                                activeClassName="active" 
                                to={item.router}
                                className={classNames("am-tab-bar-tab-active am-tab-bar-tab", item.prefixCls)}>
                                <div>
                                    <div className="am-tab-bar-tab-icon">
                                        <span className="am-tab-bar-tab-badge am-badge">
                                            <div className={classNames("am-tab-bar-tab-image home-bar-image", item.imgPrefixCls)} ></div>
                                        </span>
                                    </div>
                                    <p className="am-tab-bar-tab-title">{item.name}</p>
                                </div>
                            </Link> 
                        ))
                    }                    
                </div>
                {this.props.children}              
            </div>
        );
    }
}