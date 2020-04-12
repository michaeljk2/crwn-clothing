import React from 'react'
import { withRouter} from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size, id, linkUrl}) => {

    return (
        <div className={`${size} menu-item`} >
            <div 
                className='background-image' 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            ></div>
            <div className='content'>
            <div className='title'>{title}</div>
            <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)