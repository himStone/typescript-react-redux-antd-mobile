import * as React from "react"
import { connect } from 'react-redux'

import { getHomeState } from 'redux/reducers/home'
import { addToList } from 'redux/actions/home'
import { Item } from 'redux/modals/home'

import './index.scss'

interface HomeProps {
    home: Item[],
    addToList: Function
}

class Home extends React.Component<any, any> {

    private onBtnClick = () => {
        this.props.addToList("add text " + this.props.home.length);
    }

	render() {
        const { home } = this.props;
        
        return (
            <div>
                <h1>Home</h1>
                <button onClick={this.onBtnClick}>Add</button>
                <ul>
                    {
                        home.map((item: Item, index: number) => (<li key={index}>{item.text}</li>))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = getHomeState

export default connect(
	mapStateToProps,
	{ addToList }
)(Home)