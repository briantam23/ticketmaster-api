import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';
import { floatRight } from '../util';

class Cart extends Component {
    render() {
        return (
            <div className='container' style={{ marginTop: '30px' }}>
                <h3>Shopping Cart</h3>
                <br/>
                {/* <Link to='/'>
                    <Jumbotron>
                        <h3>Back to Events!</h3>
                    </Jumbotron>
                </Link> */}
                <table className='table'>
                    <tbody>
                        <tr>
                            <td><strong>Event Name</strong></td>
                            <td><img alt='Event Image'/></td>
                            <td>Description</td>
                            <td><strong>Price</strong></td>
                            <td><strong>Quantity: </strong></td>
                            <td><button>+</button></td>
                            <td><button>-</button></td>
                        </tr>
                    </tbody>
                </table>
                <strong><hr/></strong>
                <h4 style={ floatRight }>Total: $</h4>
                <br/><br/>
                <button style={ floatRight } className='btn btn-success my-2 my-sm-0'>Checkout</button>
                <br/><br/><br/>
            </div>
        )
    }
}

export default Cart;