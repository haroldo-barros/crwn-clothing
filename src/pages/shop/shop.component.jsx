import React from 'react';

import SHOT_DATA from'./shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOT_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
              {
                  collections.map(({id, ...otherCollectoinProps}) => (
                      <CollectionPreview key={id} {...otherCollectoinProps} />
                  ))
              }  
            </div>
        )
    }
}
export default ShopPage;