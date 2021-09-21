let store = {
    _subscriber() {
        console.log('no subscribers (observers)');
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 2},
                {id: 2, message: 'It\'s my first post', likesCount: 31},
                {id: 3, message: 'Yo', likesCount: 2},
                {id: 4, message: 'Yo', likesCount: 3}
            ],
            newPostText: 'it-kamasutra.com'
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dymich'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],

            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageText: 'Dom. rabota'
        },

        sideBar: [
            {id: 1, name: 'Dymich'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'}
        ]
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._subscriber = observer;
    },

    addPost() {
        let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._subscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._subscriber(this._state);
    },

    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText,
            likesCount: 0
        };

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._subscriber(this._state);
    },

    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._subscriber(this._state);
    }
}

export default store;