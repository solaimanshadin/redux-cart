import React from 'react';
import Products from '../Products/Products';
import { connect } from 'react-redux'

import { addToCart } from '../../Redux/Actions/Actions';

const Shop = (props) => {
    console.log(props)
    const {products, addToCart} = props;
    return (
        
        <div>
            <h2>This is Shop</h2>
            {
                products.map(pt => 
                <Products 
                    key={pt.id} 
                    addToCart = {addToCart}
                    product={pt}>
                    
                </Products>)
            }
        </div>
    );
};


const mapStateToProps = state => {
    return {
        cart : state.cart,
        products : state.products
    }
}

const mapDispatchToProps = {
    addToCart : addToCart
}

// connect(mapStateToProps, mapDispatchToProps)(Shop)
export default connect(mapStateToProps, mapDispatchToProps)(Shop);