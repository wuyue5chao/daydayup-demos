/**
 * Created by admin on 2018/7/25.
 */
import React, {Component} from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import '../css/comment.css'

class CommentApp extends Component{
    constructor(){
        super()
        this.state = {
            comments: []
        }
    }

    componentWillMount(){
        this._loadComments()
    }

    _loadComments(){
        let comments = localStorage.getItem('comments')
        if(comments){
            comments = JSON.parse(comments)
            this.setState({comments})
        }
    }

    _saveComments(comments){
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    handleSubmitComment(comment){
        //console.log(comment)
        if(!comment) return
        if(!comment.username) return alert('请输入用户名')
        if(!comment.content) return alert('请输入评论内容')
        /*this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })*/
        const comments = this.state.comments
        comments.push(comment)
        this.setState({comments})
        this._saveComments(comments)
    }

    handleDeletComment(index){
        console.log(index)
        const comments = this.state.comments
        comments.splice(index,1)
        this.setState({comments})
        this._saveComments(comments)
    }

    render(){
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments} onDeleteComment={this.handleDeletComment.bind(this)} />
            </div>
        )
    }
}

export default CommentApp