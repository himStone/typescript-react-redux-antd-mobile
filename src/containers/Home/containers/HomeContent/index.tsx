import * as React from "react"
import { List } from 'antd-mobile'

import './index.scss'

const Item = List.Item
const Brief = Item.Brief

export default class HomeContent extends React.Component<any, any> {
    
	render() {
        return (
            <div>
                <List renderHeader={() => '首页'} className="my-list">
                    <Item data-seed="logId">标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏</Item>
                    <Item extra="箭头向右" arrow="horizontal" onClick={() => {}}>标题文字</Item>
                    <Item extra="箭头向下" arrow="down" onClick={() => {}}>标题文字</Item>
                    <Item extra="箭头向上" arrow="up" onClick={() => {}}>标题文字</Item>
                </List>
            </div>
        );
    }
}