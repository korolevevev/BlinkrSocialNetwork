import '../CSS/App.css';

import {useState} from "react";
import {PostListRequest} from "./PostListRequest";
import {addPostAction} from "../Redux/ReduxStore";
import {useDispatch, useSelector} from "react-redux";

export const PostList = () => {
    const {postListState} = useSelector(store => store)
    const dispatch = useDispatch()

    const [newPost, setNewPost] = useState('')

    const onPostInput = (event) => {
        const postText = event.target.value
        setNewPost(postText)
    }

    const addPost = () => {
        if (newPost) {
            dispatch(addPostAction(newPost))
            setNewPost('')
        }
    }

    return (
        <div className=''>
            <div className="d-flex flex-column mt-5 position-relative">
                <h5 className='text-secondary'>What's new?</h5>
                <div className='input-group mb-3 border-secondary col-lg-12'
                     style={{height: '60px', border: '3px solid', borderRadius: '10px'}}>
                    <input className='form-control col-9' type="text" name='post-text' placeholder='your news...'
                           onChange={onPostInput} value={newPost} aria-label="Recipient's username"
                           aria-describedby="button-addon2"/>
                    <button className='btn btn-warning col-3' onClick={() => addPost()}>Post!</button>
                </div>
            </div>
            <h5 className='text-secondary my-4'>Recent posts</h5>
            {postListState.slice().reverse().map((post, idx) => {
                return (
                    <div key={idx} className='d-flex mb-3 align-items-center bg-light p-3' style={{borderRadius: '15px'}}>
                        <img className='border-warning' style={{borderRadius: '50%', border: '2px solid'}}
                             src="https://i.pinimg.com/originals/08/58/56/0858566dcb0ad59eced7d409bb84912d.jpg"
                             height='70' width='75' alt=""/>
                        <div className='container-fluid mx-3'>
                            {post}
                        </div>
                    </div>
                )
            })}
            <PostListRequest/>
        </div>
    )
}