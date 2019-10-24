import React, {Fragment} from "react";
import {Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import ChatList from 'sections/ChatList'
import ChatView from "sections/ChatView";


let Chat = (props)=>{


    return(
        <Router>
            <Switch>
                <Route path={'/chat'} exact={true} render={()=> <ChatList userId={props.userId} /> }/>
                <Route path={'/chat/:id'} render={()=> <ChatView/>}/>
            </Switch>
        </Router>
    )
};

export default Chat;

