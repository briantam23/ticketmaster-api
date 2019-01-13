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
                    <CardImg top width="100%" src={ event.images[6].url } alt="Card image cap" />
                    <CardBody>
                        <CardTitle>
                            <strong>{ event.name }</strong>
                        </CardTitle>
                        <hr/>
                        <CardSubtitle>
                            { 'Date: ' + event.dates.start.localDate }
                        </CardSubtitle>
                        <hr/>
                        <CardSubtitle>
                            { 'Price Range: $ ' + event.priceRanges[0].min + ' - $ ' + event.priceRanges[0].max }
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