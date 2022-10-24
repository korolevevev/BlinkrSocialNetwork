import {addPostAction} from "../Redux/ReduxStore";

test('Returns an action object', () => {
    const postAction = addPostAction('post text')
    expect(postAction).toEqual({
        type: 'ADD_POST',
        text: 'post text'
    })
})