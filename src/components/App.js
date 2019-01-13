import React, { Component, Fragment } from 'react';
import axios from 'axios';
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
        return axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=345&apikey=${API_KEY}`)
            .then(res => res.data._embedded.events)
            .then(events => this.setState({ events }))
    }
    render() {
        const { events } = this.state;
        return(
            <Fragment>
                <h1>Ticketmaster Events</h1>
                <Events events={ events }/>
            </Fragment>
        )
    }
}

export default App;