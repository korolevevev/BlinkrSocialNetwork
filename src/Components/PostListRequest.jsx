import axios from "axios";
import {useEffect} from "react";
import React from "react";
import '../CSS/App.css';
import {useDispatch, useSelector} from "react-redux";
import {addPostListAction} from "../Redux/ReduxStore";

export const PostListRequest = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const state = useSelector(store => store.postListRequestState)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(url).then((resp) => {
            let postList = resp.data.slice(0, 5)
            dispatch(addPostListAction(postList))
        })
    }, [])

    if (state.length < 1)
        return null;

    return (
        <div>
            {state.map((postText, ids) => {
                return (
                    <div className='d-flex mb-3 align-items-center bg-light p-3' key={ids} style={{borderRadius: '15px'}}>
                        <img className='border-warning' style={{borderRadius: '50%', border: '2px solid'}}
                             src="https://i.pinimg.com/originals/08/58/56/0858566dcb0ad59eced7d409bb84912d.jpg"
                             width='75' height='70' alt=""/>
                        <div className='container-fluid mx-3'>
                            {postText.body}
                        </div>
                    </div>
                )
            })}
        </div>

    )
}