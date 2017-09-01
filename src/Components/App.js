import React from "react";
import Users from "./Users";
import User from "./User";
import Add from "./Add";
import { Route } from 'react-router'

class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Users} />
                <Route path="/users/:id" component={User} />
                <Route path="/add-user" component={Add} />
            </div>
        )
    }
}

export default App;