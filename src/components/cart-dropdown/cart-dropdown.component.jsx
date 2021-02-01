import React from 'react';
import CustomeBtton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown= () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomeBtton>GO TO CHECKOUT</CustomeBtton>
    </div>
);

export default CartDropdown;