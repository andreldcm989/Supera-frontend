import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/home' component={`nenhum ainda`}/>
        </Switch>
    </BrowserRouter>
)

export default Routes