import React from 'react';
import { Container}  from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Table from './component/Table/Table';
import CsvDetails from './component/CsvDetails/CsvDetails';

const  App = () => {

    
    return (
        <BrowserRouter>
            <Container maxwidth="xl">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/csvs/:id"  component={CsvDetails} />
                    <Route path="/table" exact component={Table} />
                </Switch>
            </Container>
        </BrowserRouter>
        
    )
}

export default App;
