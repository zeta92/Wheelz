import React, {Fragment} from "react";

import {BrowserRouter as Router, Redirect, Route, Switch,useParams} from 'react-router-dom';
import Index from 'views/Index'
import Chat from 'views/Chat'
const userId='0O4Hc8aVxjedamhAwOoedAV4CoS2'

export default ()=>{

    return(
        <Router>
            <Switch>
                <Route path={'/'} exact={true} render={()=> <Index />}/>
                <Route path={'/chat'} render={() => <Chat userId={userId} />}/>
                <Route path={'/texto/:id'} exact={true} render={(props)=>{
                    const { id } = props.match.params;
                    return <span>{id}</span>
                }}/>
            </Switch>

        </Router>
    )
};



