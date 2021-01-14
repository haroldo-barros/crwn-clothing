import React, { Children } from 'react';

import './custom-button.styles.scss';

const CustomeBtton = ({children, ...otherProps}) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomeBtton;