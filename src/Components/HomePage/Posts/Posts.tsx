import React from 'react';
import Post from "./Post";
import {connect} from 'react-redux'

const Posts = ({syncPosts}:any) => {
    return syncPosts.map((post: any) => <Post post={post} key={post.id}/>).reverse()
};

const mapStateToProps = (state:any) => {
    return {
        syncPosts: state.posts.posts
    }
}


export default connect(mapStateToProps, null)(Posts)


