import React from "react";
import { Route } from "react-router-dom";

// styles consistent across the app 
import "./App.css";

// components
import Form from "./components/Form.js";
import Navigation from "./components/Navigation.js";
import ErrorMessage from "./components/ErrorMessage.js"

export default function App() {
    return (
        <div className="App">
            <Navigation />
            <div className="all-content">
                <Route path="/:id" component={Form} />
                <Route path="/" component={ErrorMessage} /> 
            </div>
        </div>
    );
}
