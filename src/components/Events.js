import React, { Fragment } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle,
    CardFooter
} from 'reactstrap';


const Events = ({ events, genre }) => {
    if(genre) {
        events = events.filter(event => event.classifications[0].genre.name === genre)  //filter by genre if genre is selected
    }
    return (
        <div className='cardContainer'>
        {
            events.map(event => event.priceRanges ? (
                <Card key={ event.id } className='card'>
                    <CardImg top width="100%" src={ event.images[5].url } alt="Card image cap" className='eventImg'/>
                    <CardBody>
                        <CardTitle>
                            <h3>
                                <strong><a href={ event.url }>{ event.name }</a></strong>
                            </h3>
                        </CardTitle>
                        <hr/>
                        <CardSubtitle>
                            <strong>Date: </strong>
                            { event.dates.start.localDate }
                        </CardSubtitle>
                        <hr/>
                        <CardSubtitle>
                            <strong>Price Range: </strong>
                            { '$' + event.priceRanges[0].min.toFixed(2) + ' - $' + event.priceRanges[0].max.toFixed(2) }
                        </CardSubtitle>
                    </CardBody>
                    <CardFooter className='text-muted'/>
                    <br/>
                </Card>
            ): null)
        }
        </div>
    )
}


export default Events;