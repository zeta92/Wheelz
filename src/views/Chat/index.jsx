import React, {Fragment} from "react";
import {Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";



export default ()=>{

    return(
        <Router>
            <Switch>
                <Route path={'/chat'} exact={true} render={()=>{
                    return <div>chat list</div>
                }}/>
                <Route path={'/chat/:id'} render={()=>{
                    return <div>chat</div>
                }}/>
            </Switch>
        </Router>
    )
};



