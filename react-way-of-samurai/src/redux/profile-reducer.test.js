import profileReducer, { addPostActionCreator } from "./profile-reducer";

test('length of post should be incremented', () => {
    // 1. TestData
    let action = addPostActionCreator('dpbih.com');
    let state = {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 2 },
            { id: 2, message: 'It\'s my first post', likesCount: 31 },
            { id: 3, message: 'Yo', likesCount: 2 },
            { id: 4, message: 'Yo', likesCount: 3 }
        ]
    }
    // 2. Action
    let newState = profileReducer(state,action);
    // 3. Expectation
    expect(newState.posts.length).toBe(5);
});