import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Results from './Results'
import Search from './Search'

const Routes = () => {
    return (
        <div className='p-4'>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/search">
                        <Search/>
                    </Redirect>
                </Route>
                <Route exact path={["/search", "/images", "/videos"]}>
                    <Results/>

                </Route>

            </Switch>
            
        </div>
    )
}

export default Routes
