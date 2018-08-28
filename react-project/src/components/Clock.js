/**
 * Created by admin on 2018/7/26.
 */
import React, {Component} from 'react';

class Clock extends Component{
    constructor(){
        super()
        this.state = {
            date: new Date()
        }
    }

    componentWillMount(){
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        return(
            <div style={{textAlign: 'center'}}>
                现在时间是：{this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

export default Clock