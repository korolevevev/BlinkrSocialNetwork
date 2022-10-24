import {combineReducers, configureStore} from "@reduxjs/toolkit";

const ADD_POST_LIST = 'ADD_POST_LIST'
const ADD_POST = 'ADD_POST'

const messagesReducer = (state =
                             {userList: [{userID: 1, name: 'Naomi'},
                                     {userID: 2, name: 'Tim'},
                                     {userID: 3, name: 'Sergio'},
                                     {userID: 4, name: 'Shaq'}],
                                 dialogList: [{userID: 1, messages: [{sender: 'friend', message: 'What is going on!?'},
                                         {sender: 'me', message: 'What happened?'},
                                         {sender: 'friend', message: 'Why dont you call me???'},
                                         {sender: 'me', message: 'Im working on YOUR university project!'}]},
                                     {userID: 2, messages: [{sender: 'friend', message: 'I am at school!'},
                                             {sender: 'friend', message: 'Check TG mems'}]},
                                     {userID: 3, messages: [
                                             {sender: 'friend', message: 'Play volleyball maybe?'},
                                             {sender: 'friend', message: 'Play tanks maybe?'}]},
                                     {userID: 4, messages: [{sender: 'friend', message: 'Are you at home?'},
                                             {sender: 'me', message: 'No, left for breakfast'},
                                             {sender: 'friend', message: 'Maybe meet at 5PM today?'},
                                             {sender: 'me', message: 'Good idea!'},
                                             {sender: 'friend', message: 'Well, see you'}]}]}, action) =>
{
    return state
}

const postListReducer = (state=['First manual post! You can read posts that were received by API below :)'], action) => {
    switch (action.type) {
        case ADD_POST: return state.concat(action.text);
        default: return state
    }
}

export const addPostAction = (newPost) => {
    return {
        type: ADD_POST,
        text: newPost
    }
}

const postListRequestReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_POST_LIST: return state.concat(action.postList);
        default: return state
    }
}

export const addPostListAction = (postList) => {
    return {
        type: ADD_POST_LIST,
        postList: postList
    }
}

const reducers = combineReducers({postListState: postListReducer, messagesState: messagesReducer,
    postListRequestState: postListRequestReducer})

export const store = configureStore({reducer: reducers})