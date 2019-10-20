import React, {Fragment} from "react";

import {BrowserRouter as Router, Redirect, Route, Switch,useParams} from 'react-router-dom';
import Index from './Views/Index'

export default ()=>{

    return(
        <Router>
            <Switch>
                <Route path={'/'} exact={true} render={()=>{
                    return <Index />
                }}/>
            </Switch>
            <Switch>
                <Route path={'/texto/:id'} exact={true} render={(props)=>{
                    const { id } = props.match.params
                    return <span>{id}</span>
                }}/>
            </Switch>

        </Router>
    )
};



