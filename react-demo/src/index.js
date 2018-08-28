/**
 * Something is already running on port 3000.
 * 解决方法 port=3001 npm start
 *
 *
 **/

import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';

import Header from './components/Header'
import Content from './components/Content'

function createStore(reducer){
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)  //覆盖原对象
        listeners.forEach((listener) => listener())
    }
    dispatch({})  //初始化 state
    return {getState, dispatch, subscribe}
}

function themeReducer(state, action){
    if(!state){
        return {
            themeColor: 'red'
        }
    }
    switch (action.type){
        case 'CHANGE_COLOR':
            return {   //构建新的对象并且返回
                ...state,
                themeColor: action.themeColor
            }

        case 'UPDATE_TITLE_COLOR':
            //state.title.color = action.color
            //break
            return {
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            }
        default:
            return state  //没有修改 返回原来的对象
    }
}

const store = createStore(themeReducer)

class Index extends Component{
    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext(){
        return {store}
    }

    render(){
        return (
            <div className="wrapper">
                <Header />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)