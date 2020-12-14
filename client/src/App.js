import React, { useEffect } from 'react';
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { getRecipes } from './actions/recipes';
import WelcomePage from "./components/WelcomePage/WelcomePage";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import NewRecipePage from "./components/NewRecipePage/NewRecipePage";

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]);
    
    return (
        <div>
            <Router>
                <div id="routing-container">
                    <Route exact path="/">
                        <Redirect to="/welcome" />
                    </Route>
                    <Route path="/welcome" component={WelcomePage}></Route>
                    <Route path="/home" component={HomePage}></Route>
                    <Route path="/login" component={LoginPage}></Route>
                    <Route path="/signup" component={SignUpPage}></Route>
                    <Route path="/recipes/newrecipe" component={NewRecipePage}></Route>
                </div>
            </Router>
        </div>
    );
}