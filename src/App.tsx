import React, {useEffect} from 'react';
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import MessagePage from "./Pages/Message";
import {Route, Redirect, Switch} from "react-router-dom";
import Menu from "./Components/Menu";
import {NewsPage} from "./Pages/NewsPage";
import FriendsPage from "./Pages/FriendsPage";
import FriendsPageContainer from "./Containers/FriendsContainer";
import RegisterPage from "./Pages/RegisterPage";
import {useDispatch, useSelector} from "react-redux";
import {authLogin} from "./Redux/actions/authActions";
import Logout from "./Pages/Logout";


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(authLogin())
    }, [dispatch]);


    const selectToken = ({auth}: any) => !!auth.token
    const token = useSelector(selectToken)

    if (token) {
        return (
            <div className="App">
                <Header/>
                <div className='Home'>
                    <div className='Home__wrapper'>
                        <div className='Home__menu'>
                            <Menu/>

                        </div>
                        <Switch>
                            <Route path='/Home' component={HomePage}/>
                            <Route path='/Messages' component={MessagePage}/>
                            <Route path='/News' component={NewsPage}/>
                            <Route path='/Friends' component={FriendsPage}/>
                            <Route path='/Friend/:friendId' component={FriendsPageContainer}/>
                            <Route path='/Logout' component={Logout}/>
                            <Redirect to='/Home'/>
                            {/*404*/}
                        </Switch>
                    </div>
                </div>

            </div>
        );
    } else {
        return (
            <>
                <Header/>
                <Route path='/Registration' component={RegisterPage}/>
                <Redirect to='/Registration'/>
            </>
        )
    }

}

export default App;
