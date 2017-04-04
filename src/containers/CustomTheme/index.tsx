import * as React from "react"
import { Tabs } from 'antd-mobile'

import './index.less'

const TabPane = Tabs.TabPane;

export default class CustomTheme extends React.Component<any, any> {
    
	render() {
        return (
            <div>
                <h3>Custom Theme</h3>
                <p>/theme.json</p>
                <p>"tabs-color": "#f38631"</p>
                <Tabs defaultActiveKey="2">
                <TabPane tab="选项卡一" key="1">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                    选项卡一内容
                    </div>
                </TabPane>
                <TabPane tab="选项卡二" key="2">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                    选项卡二内容
                    </div>
                </TabPane>
                <TabPane tab="选项卡三" key="3">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                    选项卡三内容
                    </div>
                </TabPane>
                </Tabs>
            </div>
        );
    }
}