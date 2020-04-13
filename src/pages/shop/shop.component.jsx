import React from 'react'
import PreviewCollection from '../../components/collection-preview/preview-collection.component'
import SHOP_DATA from './shop.data'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render () {
        // Hier wird lediglich das erste Child aus dem JSON herausgenommen
        // nämlich: das erste Array Objekt, egal wie man es nennt!
        const { collections } = this.state
        return (
            collections.map(({id, ...otherCollectionProps}) => (
                <div key={id} >
                    <h1>SHOP PAGE</h1>
                    <PreviewCollection {...otherCollectionProps}/>
                </div>
            ))
        )
    }
}

export default ShopPage