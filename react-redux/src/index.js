/**
 * Redux 前端架构模式（Flux 架构的已中变种）
 * React-redux 是把 Redux 这种架构模式和 React.js 结合起来的一个库
 *
 * 不同的模块（组件）之间需要共享数据，还可能需要修改这些共享数据
 *
 * 纯函数（Pure Function）
 * 一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，对外部没有影响，我们把这个函数叫做纯函数
 * const foo = (a, b) => a + b
 *
 **/


//共享状态 尽量避免全局变量
let appState = {
    title: {
        text: 'react.js 小书',
        color: 'red'
    },
    content: {
        text: '小书内容',
        color: 'blue'
    }
}

/*function createStore(state, stateChanger){
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = stateChanger(state, action)  //覆盖原对象
        listeners.forEach((listener) => listener())
    }
    return {getState, dispatch, subscribe}
}*/


// 将state 和 stateChanger 合并在一起， 给 stateChanger 起一个通用的名字 reducer
// createStore 接受一个参数 reducer ，它是一个纯函数
// reducer 接受两个参数， state 和 action, 它不允许有副作用，它要做的仅仅是--初始化和计算新的 state
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

function stateChanger(state, action){
    if(!state){
        return {
            title: {
                text: 'react.js 小书',
                color: 'red'
            },
            content: {
                text: '小书内容',
                color: 'blue'
            }
        }
    }
    switch (action.type){
        case 'UPDATE_TITLE_TEXT':
            //state.title.text = action.text
            //break
            return {   //构建新的对象并且返回
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
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

/*function dispatch(action){
    switch (action.type){
        case 'UPDATE_TITLE_TEXT':
            appState.title.text = action.text
            break
        case 'UPDATE_TITLE_COLOR':
            appState.title.color = action.color
            break
        default:
            break
    }
}*/

function renderApp(newAppState, oldAppState={}){   //默认参数 oldAppState={}
    if(newAppState === oldAppState) return //数据没有变化就不渲染了
    console.log('render app...')
    renderTitle(newAppState.title, oldAppState.title)
    renderContent(newAppState.content, oldAppState.content)
}

function renderTitle(newTitle, oldTitle={}){
    if(newTitle === oldTitle) return
    console.log('render title...')
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = newTitle.text
    titleDOM.style.color = newTitle.color
}

function renderContent(newContent, oldContent={}){
    if(newContent === oldContent) return
    console.log('render content...')
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = newContent.text
    contentDOM.style.color = newContent.color
}

// 生成 store
//const store = createStore(appState, stateChanger)
const store = createStore(stateChanger)

//缓存旧的state
let oldState = store.getState()

// 监听数据变化重新渲染页面
store.subscribe(() => {
    const newState = store.getState()  //获取新的state
    renderApp(newState, oldState)
    oldState = newState
})

//renderApp(appState)  //首次渲染
renderApp(store.getState())

// 随意修改内容 dispatch , 页面自动更新
//dispatch({type: 'UPDATE_TITLE_TEXT', text: '《react.js 小书》'})
//dispatch({type: 'UPDATE_TITLE_COLOR', color: 'green'})
store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '《react.js 小书》'})
store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'blue'})

console.log(appState)

//renderApp(appState)  //修改后渲染
//renderApp(store.getState())