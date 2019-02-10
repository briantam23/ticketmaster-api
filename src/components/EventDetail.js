import React, { Component, Fragment } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';


const cardStyle = {
    border: '1px solid grey',
    height: '500px',
    width: '40rem',
    margin: '10px'
}

const imgStyle = {
    width: '500px'
}


class EventDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            price: '',
            quantity: '',
            imageUrl: '',
            categories: [],
            liQuantity: 0,
        }
    }
    render() {
        const { history, eventId } = this.props;
        return (
            <Fragment>
                <div>
                    <div className='container' style={{ marginTop: '40px' }}>
                        <Button color='info' onClick={ () => history.goBack() }>Back</Button>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <img style={ imgStyle } className='card-img-top' alt='Card Image Cap'/>
                            </div>
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                            <h3 className='card-title'>Event Name</h3>
                            <p className='card-text'>Description</p>
                            <p className='card-text'><strong>Price</strong></p>
                            <ButtonDropdown>
                                <DropdownToggle color='dark' caret>
                                    <DropdownMenu>
                                    {
                                        [1, 2, 3, 4, 5].map(_liQuantity => (
                                            <DropdownItem key={ _liQuantity }>
                                                { _liQuantity }
                                            </DropdownItem>
                                        ))
                                    }
                                    </DropdownMenu>
                                </DropdownToggle>
                            </ButtonDropdown>
                            <a href='#' className='btn btn-success'>Add To Cart</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default EventDetail;