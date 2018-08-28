/**
 * 从react中 引用React、{Component}
 * 从react-dom中 引用ReactDOM  把React组件渲染到页面中
 * JSX 语法  ==> 所谓的 JSX 其实就是 javascript 对象； js的语法扩展
 * JSX => javascript 对象 => DOM 元素
 * DOM 元素包含的三个信息：标签名、属性、子元素; 可以用javascript对象来表示：
 * ｛
 *    tag: 'div',
 *    attrs: {className: 'box', id: 'content'}
 *    children: [
 *      {
 *        tag: 'div',
 *        attrs: {className: 'title'},
 *        children: ['Hello']
 *      },
 *      {
 *        tag: 'buuon',
 *        attrs: null,
 *        children: ['click']
 *      }
 *    ]
 *  ｝
 *  React.createElement 会构建一个javascript对象来描述html结构的以上信息
 *
 *  JSX 表达式{} 内可以房任何js代码，包括变量、表达式计算、函数执行等
 *  js关键字改写 class => className  for => htmlFor
 *
 *  组件的组合、嵌套、组件树
 *  自定义组件名 必须以大写字母开头
 *
 *  事件监听 onClick、onKeyDown等， on* 驼峰命名法 只能用在普通html标签上，不能用在组件标签上
 *  事件监听函数不能通过 this 获取实例；若想在事件函数中使用当前实例，需要手动将实例方法 bind 到当前实例上再传入 React.js；可以在 bind 时给事件监听函数传入一些参数
 *
 *  state  存储数据状态和配置参数
 *  setState 接受一个对象或函数作为参数 setState({isLike: !this.state.isLike})
 *  setState方法由 Component 提供，当我们调用该函数时，react.js会更新组件的状态 state，并且重新调用render方法，然后再把render方法所渲染的最新的内容显示到页面上
 *
 *  props 组件的可配置性  不能改变一个组件被渲染时传进来的props
 *  defaultProps 默认配置
 *
 *  state 主要用于组件保存、控制、修改自己的可变状态。在塑件内部初始化，可以被组件自身修改，而外部不能访问也不能修改，可以认为是一个局部的、只能被组件自身控制的数据源，可以通过this.setState方法进行更新，使组件重新渲染
 *
 *  props 主要是让使用该组件的父组件可以传入参数来配置该组件。是外部传进来的配置参数，组件内 部无法控制也无法修改，除非外部组件主动传入新的props，否则组件的props永远保持不变
 *
 *  state 是让组件控制自己的状态
 *  props 是让外部对组件进行配置
 *
 *  尽量少用state，多用props
 *
 *  无状态组件 没有state
 *  有状态组件
 *  函数式组件
 *
 *  let...of
 *
 *  使用map渲染列表数据
 *  对于用表达式套数组罗列到页面上的元素，都要为每个元素加上 key 属性，这个 key 必须是每个元素唯一的标识
 *
 *  =======挂载阶段的组件生命周期=======
 *  我们把react.js将组件渲染，并且构造DOM元素然后塞入页面的过程称为组件的挂载
 *  初始化组件 => 挂载到页面   这是一个从无到有的过程
 *
 *  -> constructor()
 *  -> componentWillMount()
 *  -> render()
 *  // 构造DOM元素插入页面
 *  -> componentDidMount()
 *  // ...
 *  // 即将从页面删除
 *  -> componentWillUnmount
 *  // 从页面中删除
 *
 *  componentWillMount 组件挂载之前，也就是在组件调用render方法之前调用
 *  componentDidMount  组件挂载完成以后，也就是DOM元素已经插入页面后调用
 *  componentWillUnmount  组件对应的DOM元素从页面中删除之前调用
 *
 *  一般会把 state 的初始化工作放在 constructor 中
 *  一些组件启动的动作，如ajax数据的拉取操作、定时器的启动等，可以放在 componentWillMount 里面进行
 *  有些组件的启动工作是依赖 DOM 的，如动画的启动，可以放在 componentDidMount 里面
 *  组件从页面上销毁时，有时候需要清理一些数据，如定时器的清理，就会放在 componentWilUnmount 里面
 *
 *  =======更新阶段的组件生命周期=======
 *  就是setState导致react.js重新渲染组件并且把组件的变化应用到DOM元素上的过程，这是一个组件变化的过程
 *
 *  shouldComponentUpdate(nextProps, nextState)
 *  componentWillReceiveProps(nextProps)
 *  componentWillUpdate()
 *  componentDidUpdate()
 *
 *  ref 获取已经挂载的元素的DOM节点
 *  原则：能不用ref就不用
 *  ref的属性值是一个函数 ref={(input) => this.input = input}
 *  也可以给组件标签加上 ref
 *
 *  dangerouslySetInnerHTML = {{__html: this.state.html}}
 *  动态渲染元素的 innerHTML 结构
 *
 *  style属性变成一个对象传入 并且所有带 - 的元素 都换成驼峰命名
 *  style={{fontSize: '12px', color: this.state.color}}
 *
 *  propTypes 给组件的配置参数加上类型验证
 *  npm install --save props-types
 *  static propTypes = {
 *      comment: PropTypes.object.isRequired  //必传对象参数
 *  }
 *
 *  PropTypes.array
 *  PropTypes.bool
 *  PropTypes.func
 *  PropTypes.number
 *  PropTypes.object
 *  PropTypes.string
 *  PropTypes.node
 *  PropTypes.element
 *
 *
 *   =======高阶组件 Higher Order Component=======
 *   高阶组件（HOC）是一个函数，传给它一个组件，它返回一个新的组件。可以理解为一个生产react组件的工厂
 *   const NewComponent = higerOrderComponent(OldComponent)
 *
 *
 *
 **/

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'
import './style.scss'

// style.scss => style.css
// import './style.css'

import CommentApp from './components/CommentApp'
import Clock from './components/Clock'
// import InputWithUsername from './components/InputWithUsername'

/*class HigherComponent extends Component{
    render(){
        return(
            <div>
                用户名： <InputWithUsername/>
            </div>
        )
    }
}*/

class CommentType extends Component{
    static propTypes = {
        comment: PropTypes.object.isRequired
    }

    render(){
        const {comment} = this.props
        return(
            <div>
                用户名：{comment.username}
                评论：{comment.content}
            </div>
        )
    }
}

class Editor extends Component{
    constructor(){
        super()
        this.state = {
            content: '<h3>哈哈~</h3>',
            color: 'red'
        }
    }

    render(){
        return(
            <div style={{color: this.state.color}}>
                {this.state.content}
                <div dangerouslySetInnerHTML={{__html:this.state.content}} />
            </div>

        )
    }
}

class Card extends Component{
    render(){
        console.log(this.props.children)
        return(
            <div className="card">
                <div className="card-content">
                    <div className="title">{this.props.children[0]}</div>
                    <div>{this.props.children[1]}</div>
                </div>
            </div>
        )
    }
}

class Main2 extends Component{
    render(){
        return(
            <div>
                <Editor/>
                <Card>
                    <h3>react.js 小书</h3>
                    <div>开源、免费</div>
                    订阅：<input/>
                </Card>

                <CommentType comment={{username: 'sd', content: 'sdddd'}} />
            </div>
        )
    }
}

/*class AutoFocusInput extends Component{
    componentDidMount(){
        this.input.focus()
    }

    render(){
        return(
            <div>
                <input ref={(input) => this.input = input}/>
            </div>
        )
    }
}*/

class ShowClock extends Component{
    constructor(){
        super()
        this.state = {
            isShowClock: true
        }
    }

    handleShowOrHide(){
        this.setState({
            isShowClock: !this.state.isShowClock
        })
    }

    render(){
        return(
            <div>
                {this.state.isShowClock ? <Clock/> : null}
                <button onClick={this.handleShowOrHide.bind(this)}>显示/隐藏时钟</button>
            </div>
        )
    }
}

class TitleH3 extends Component{
    constructor(){
        super()
        console.log('constructor')
    }

    componentWillMount(){
        console.log('component Will Mount')
    }

    componentDidMount(){
        console.log('component Did Mount')
    }

    componentWillUnmount(){
        console.log('component Will Unmount')
    }

    render(){
        return(
            <h3>hahaha~</h3>
        )
    }
}

class Title extends Component{
    constructor(){
        super()
        this.state = {
            isShow: true
        }
        console.log('constructor')
    }
    handleClickOnTitle(word, e){
        console.log('click on title')
        console.log(e);
        console.log(e.target.innerHTML)
        console.log(this, word)   //  undefined  or null
    }

    handleShowHide(){
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render(){
        console.log('render')
        return(
            <div>
                <h2 onClick={this.handleClickOnTitle.bind(this, 'Hello')}>React Demo</h2>
                {this.state.isShow ? <TitleH3/> : null}
                <button onClick={this.handleShowHide.bind(this)}>显示隐藏</button>
            </div>

        )
    }
}

class Header extends Component{
    renderGoodWord(goodWord, badWord){
        const isGood = false
        return isGood ? goodWord : badWord
    }

    render(){
        const word = 'is good'
        const className = 'header'
        const isGood = true
        const goodWord = <strong>is good haha</strong>
        return(
            <div className={className}>
                <Title/>
                <p className='title'>React小书{word}</p>
                <p>{(function(){return '执行函数'})()}</p>
                <label htmlFor="male">Male</label>
                <p>{isGood ? goodWord : null}</p>
                {this.renderGoodWord(<span>good</span>, <span>bad</span>)}
            </div>
        )
    }
}

class LikeButton extends Component{
    static defaultProps = {
        likeText: "取消",
        unlikeText: "点赞"
    }

    constructor(){
        super()
        this.state = {isLike: false, count: 0}
    }

    handleClick(){
        this.setState({
            isLike: !this.state.isLike
        })
        /*this.setState((preState) => {
            return {count: 3}
        })*/
        this.setState((preState) => {
            return {count: preState.count + 1}
        })
    }

    render(){
        /*const likeText = this.props.likeText || '取消'
        const unlikeText = this.props.unlikeText || '点赞'
        const wordings = this.props.wordings || {
                likeText: "取消",
                unlikeText: "点赞"
            }*/

        return(
            <button onClick={this.handleClick.bind(this)}>
                {this.state.isLike ? this.props.likeText : this.props.unlikeText}
                {this.state.count}
            </button>
        )
    }
}

class LikeButtonModify extends  Component{
    constructor(){
        super()
        this.state = {
            likeText: "已赞",
            unlikeText: "赞"
        }
    }

    handleClick(){
        this.setState({
            likeText: "取消",
            unlikeText: "点赞"
        })
    }

    render(){
        return(
            <div>
                <LikeButton likeText={this.state.likeText} unlikeText={this.state.unlikeText} />
                <button onClick={this.handleClick.bind(this)}>修改words</button>
            </div>
        )
    }
}

const users = [
    { id: 0, username: 'Jerry', age: 21, gender: 'male' },
    { id: 1, username: 'Tomy', age: 22, gender: 'male' }
]

class User extends Component{
    render(){
        const {user} = this.props
        return(
            <li className="userlist">
                <p>姓名：{user.username}</p>
                <p>年龄：{user.age}</p>
                <p>性别：{user.gender}</p>
            </li>
        )
    }
}

class UserListMap extends Component{
    render(){
        return(
            <ul>
                {users.map((user, i) => <User key={i} user={user}/>)}
            </ul>
        )
    }
}

/*class UserListMap extends Component{
    render(){
        return(
            <ul>
                {users.map((user) => {
                    return (
                        <li className="userlist">
                            <div>姓名：{user.username}</div>
                            <div>年龄：{user.age}</div>
                            <div>性别：{user.gender}</div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}*/

/*class UserList extends Component{
    render(){
        const usersElements = []
        for(let user of users){
            usersElements.push(
                <div className="userlist">
                    <div>姓名：{user.username}</div>
                    <div>年龄：{user.age}</div>
                    <div>性别：{user.gender}</div>
                </div>
            )
        }

        return(
            <div>{usersElements}</div>
        )
    }
}*/

class Main extends Component{
    render(){
        return(
            <div className="main">
                <hr/>
                <p>main content</p>
                <LikeButton />
                <LikeButton likeText="已赞" unlikeText="赞" />
                <LikeButton wordings={{likeText: "已赞", unlikeText: "赞"}} />
                <div>
                    <LikeButtonModify/>
                </div>
                <hr/>
                <UserListMap/>
            </div>
        )
    }
}

class Index extends Component{
    render(){
        return(
            <div>

                <CommentApp/>
                <hr/>
                <Main2 />
                <hr/>
                <ShowClock />
                {/*<AutoFocusInput/>*/}
                <hr/>
                <Header/>
                <Main/>
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)





/*
//JSX编译后
class Header extends Component{
    render(){
        return(
            React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    {className: 'title'},
                    'React 小书'
                )
            )
        )
    }
}
ReactDOM.render(
    React.createElement(Header, null),
    document.getElementById('root')
)
*/


