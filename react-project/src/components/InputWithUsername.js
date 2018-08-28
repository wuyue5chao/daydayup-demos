/**
 * Created by admin on 2018/7/30.
 */
import React, {Component} from 'react'
import wrapWithLoadData from './components/wrapWithLoadData'

class InputWithUsername extends Component{
    render(){
        return <input value="{this.props.data}"/>
    }
}

InputWithUsername = wrapWithLoadData(InputWithUsername, 'username')

export default InputWithUsername