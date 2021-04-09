import React from 'react'
import {connect} from 'react-redux'
import {createPost} from "../../../Redux/actions/postsActions";

 class PostForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            title:''
        }
    }
    submitHandler = (event) => {
        event.preventDefault()

        const {title} = this.state

        if (title.length < 1){
            return
        }

        const newPost = {
            title, id:Date.now().toString()
        }
        this.props.createPost(newPost)
        this.setState({title:''})
    }
    changeInputHandler = (event) => {
        event.persist()
        this.setState(prev => ({...prev, ...{
            [event.target.name]:event.target.value
            }}))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <label htmlFor='title'>Input</label>
                <input type='text'
                       className='form-control'
                       id='title'
                       value={this.state.title}
                       name='title'
                       onChange={this.changeInputHandler}
                />

                <button type='submit'>SEND</button>
            </form>
        );
    }
}



export default connect(null, {createPost})(PostForm)