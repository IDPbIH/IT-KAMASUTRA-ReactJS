import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 2 },
        { id: 2, message: 'It\'s my first post', likesCount: 31 },
        { id: 3, message: 'Yo', likesCount: 2 },
        { id: 4, message: 'Yo', likesCount: 3 }
    ]
}
test('length of post should be incremented', () => {
    // 1. TestData
    let action = addPostActionCreator('dpbih.com');
    // 2. Action
    let newState = profileReducer(state,action);
    // 3. Expectation
    expect(newState.posts.length).toBe(5);
});
test('message of new post should be "dpbih.com"', () => {
    // 1. TestData
    let action = addPostActionCreator('dpbih.com');
    
    // 2. Action
    let newState = profileReducer(state,action);
    // 3. Expectation
    expect(newState.posts[4].message).toBe('dpbih.com');
});
test('after deliting length of messages should be decrement', () => {
    // 1. TestData
    let action = deletePost(1);
    
    // 2. Action
    let newState = profileReducer(state,action);
    // 3. Expectation
    expect(newState.posts.length).toBe(3);
});

test('after deliting length shouldn`t be decrement if id is incorrect', () => {
    // 1. TestData
    let action = deletePost(1000);
    
    // 2. Action
    let newState = profileReducer(state,action);
    // 3. Expectation
    expect(newState.posts.length).toBe(4);
});