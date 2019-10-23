import React, {Fragment} from "react";
import {Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import ChatList from 'sections/ChatList'


export default (props)=>{


    return(
        <Router>
            <Switch>
                <Route path={'/chat'} exact={true} render={()=> <ChatList userId={props.userId} /> }/>
                <Route path={'/chat/:id'} render={()=>{
                    return <div>chat</div>
                }}/>
            </Switch>
        </Router>
    )
};



