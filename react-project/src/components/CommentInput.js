/**
 * Created by admin on 2018/7/25.
 *
 * 点击发布按钮时，将 CommentInput 的state中的最新评论数据传递给父组件 ComponentApp, 然后让父组件将这个数据传递给 ComponentList 进行渲染
 *
 * 父组件 ComponentApp 通过 props 给子组件 ComponentInput 传入一个回掉函数，ComponentInput 调用 props 中的回掉函数并且将 state 传入该函数，即可完成子组件向父组件之间的数据传递
 *
 * 状态提升
 * 将组件之间共享的状态交给组件最近的公共父节点保管，然后通过props把状态传递给各个子组件，这样就可以在组件之间共享数据了，这种行为叫做 ‘状态提升’
 *
 * Redux 状态管理工具
 *
 * 受控组件
 * <input/> <textarea/> <select/>等输入控件的 value 值被 state 初始化，并由 setState 控制改变
 *
 * 组件的私有方法都用 _ 开头
 * 所有事件监听的方法都用 handle 开头
 *
 * 组件内容的编写顺序：
 * 1、static 开头的属性，如defaultProps、propTypes
 * 2、构造函数 constructor
 * 3、getter/setter
 * 4、组件生命周期
 * 5、_ 开头的私有方法
 * 6、handle* 事件监听方法
 * 7、render* 开头的方法 有时候render()方法里面的内容会分开到不同的函数里面
 * 8、render() 方法
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types'

class CommentInput extends Component{
    static propTypes = {
        onSubmit: PropTypes.func
    }

    constructor(){
        super()
        this.state = {
            username: '',
            content: ''
        }
    }

    componentWillMount(){
        this._loadUsername()
    }

    componentDidMount(){
        this.textarea.focus()
    }

    _loadUsername(){
        const username = localStorage.getItem('username')
        if(username){
            this.setState({username})
        }
    }

    _saveUsername(name){
        localStorage.setItem('username', name)
    }

    handleUsernameChange(e){
        this.setState({
            username: e.target.value
        })
    }

    handleContentChange(e){
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit(){
        if(this.props.onSubmit){
            //const {username, content} = this.state
            //this.props.onSubmit({username, content})
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })
        }
        this.setState({content: ''})
    }

    handleUsernameBlur(e){
        this._saveUsername(e.target.value)
    }

    render(){
        return (
            <div className="comment-input">
                <CommentField keyword="用户名">
                    <input
                        value={this.state.username}
                        onChange={this.handleUsernameChange.bind(this)}
                        onBlur={this.handleUsernameBlur.bind(this)}
                    />
                </CommentField>
                <CommentField keyword="评论内容">
                    <textarea ref={(textarea) => this.textarea = textarea} value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
                </CommentField>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

class CommentField extends Component{
    render(){
        return(
            <div className="comment-field">
                <span className="comment-field-name">{this.props.keyword}：</span>
                <div className="comment-field-input">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default CommentInput