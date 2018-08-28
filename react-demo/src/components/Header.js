/**
 * Created by admin on 2018/8/1.
 */
import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Header extends Component{
    static contextTypes = {
        store: PropTypes.object
    }

    constructor(){
        super()
        this.state = {themeColor: ''}
    }

    componentWillMount(){
        const {store} = this.context
        this._updateThemeColor()
        store.subscribe(() => this._updateThemeColor())
    }

    _updateThemeColor(){
        const {store} = this.context
        const state = store.getState()
        this.setState({themeColor: state.themeColor})
    }

    render(){
        return (
            <h2 style={{color: this.state.themeColor}}>react.js 小书</h2>
        )
    }
}

export default Header