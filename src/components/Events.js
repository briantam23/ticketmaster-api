import React, { Fragment } from 'react';


const Events = ({ events })=> {
    console.log(events)
    return(
        <Fragment>
            <ul>
            {
                events.map(event => (
                    <li key={ event.id }>
                        { event.name + ' ' + event.dates.start.localDate }
                    </li>
                ))
            }
            </ul>
        </Fragment>
    )
}


export default Events;