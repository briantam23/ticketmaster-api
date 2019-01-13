import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Events from './Events';
import API_KEY from '../../apiKey';


class App extends Component {
    constructor() {
        super();
        this.state = {
            events: []
        }
    }
    componentDidMount() {
        return axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=410&apikey=${API_KEY}`)   //axios call to Ticketmaster API
            .then(res => res.data._embedded.events)
            .then(events => this.setState({ events }))
    }
    render() {
        //const events = this.state.events.slice(0,8);    //shorten the event array to the first 8
        const { events } = this.state;
        return(
            <Fragment>
                <Nav/>
                <Events events={ events }/>
            </Fragment>
        )
    }
}

export default App;