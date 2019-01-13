import React, { Component, Fragment } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Events from './Events';
import API_KEY from '../../apiKey';
import { HashRouter as Router, Route } from 'react-router-dom';


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
        const { events } = this.state;
        let genres = [];
        events.map(event => {
            let genre = event.classifications[0].genre.name;
            if(genres.indexOf(genre) === -1) {
                genres.push(genre)   //compiling all the different genres
            }
        })
        return(
            <Router>
                <Fragment>
                    <NavBar genres={ genres }/>
                    <Route path='/:genre?' render={({ match }) => <Events events={ events } genre={ match.params.genre }/>}/>
                </Fragment>
            </Router>
        )
    }
}

export default App;