/**
 * Created by admin on 2018/7/30.
 */
import React, {Component} from 'react'

export default (WrappedComponent) => {
    class NewComponent extends Component{
        //自定义逻辑
        constructor(){
            super()
            this.state = {data: null}
        }

        componentWillMount(){
            let data = localStorage.getItem(name)
            this.setState({data})
        }

        render(){
            return <WrappedComponent data={this.state.data}/>
        }
    }

    return NewComponent
}
