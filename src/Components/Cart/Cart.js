import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/Actions/Actions';

const Cart = (props) => {
    const {cart, removeFormCart} = props;
    return (
        <div>
            <h3>this is cart ({cart.length})</h3>
            <ul>
            {cart.map(product => <li key={product.cartId}> {product.name}
             <button onClick={() => removeFormCart(product.cartId)}
             >x</button></li>)}
            </ul>
        </div>
    );
};

const mapSateToProps = sate => {
    return {
        cart : sate.cart
    }
}

const mapDispatchToProps = {
    removeFormCart : removeFromCart,
}


export default connect(mapSateToProps, mapDispatchToProps) (Cart);