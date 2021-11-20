import React, { Component } from "react";
import './App.css';
import { HashRouter, BrowserRouter, Route, withRouter, Switch, Redirect} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { initializeApp } from '../src/redux/app-reducer';
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
// import { withSuspense } from "./hoc/withSuspense"; //95 

// import DialogsContainer from "./components/Dialogs/DialogsContainer"; //95
// import ProfileContainer from './components/Profile/ProfileContainer'; //95
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            // <HashRouter> //95
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <Navbar />
                    <div className='app-wrapper-content'>

                        {/* 94 pots & me version*/}
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Route path='/dialogs' render={() => <DialogsContainer />} />
                            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                        </React.Suspense>
                        {/* 94 Dimych version*/}
                        {/* <Route path='/dialogs' render={withSuspense(DialogsContainer)
                            // () => {
                            // return <React.Suspense fallback={<div>Loading...</div>}>
                            //     <DialogsContainer />
                            // </React.Suspense>
                            // }
                        } />
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)
                            // () => {
                            //     return <React.Suspense fallback={<div>Loading...</div>}>
                            //         <ProfileContainer />
                            //     </React.Suspense>
                            // }
                        } /> */}
                        <Switch>
                            <Route path='/' render={() => <Redirect to={'/profile'} />} />
                            <Route path='/users' render={() => <UsersContainer />} />
                            <Route path='/news' render={() => <News />} />
                            <Route path='/music' render={() => <Music />} />
                            <Route path='/settings' render={() => <Settings />} />
                            <Route path='/login' render={() => <LoginPage />} />
                            <Route path='*' render={() => <div>NOT FOUND</div>} />
                        </Switch>
                    </div>
                </div>
                {/* </HashRouter> //95*/}
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;